import { interval, Observable, Subject, Subscription, take, timer } from 'rxjs';
import { Consumer, EachMessagePayload, Kafka } from 'kafkajs';
import logger from '../logger';

export const getKafkaClient = (brokers: string[], clientId: string, logLevel: number) => {
  return new Kafka({
    brokers,
    clientId,
    logLevel,
  });
};

export const checkHealingKafka = async (kafka: Kafka): Promise<boolean> => {
  const admin = kafka.admin();
  await admin.connect();

  try {
    await admin.listTopics();
    logger.info('kafka is ready | kafka check healing');
    return true;
  } catch (error) {
    logger.error(`kafka is not ready ${error} | kafka check healing`);
    return false;
  } finally {
    await admin.disconnect();
  }
};

export const kafkaConsumer = async (
  kafka: Kafka,
  groupId: string,
  topics: string[],
  subject: Subject<EachMessagePayload>,
  options?: {
    consumerConectionTimeout?: number;
  },
): Promise<Consumer> => {
  const consumer = kafka.consumer({ groupId });
  await consumer.connect();

  for (const topic of topics) {
    await consumer.subscribe({ topic });
  }

  await consumer.run({
    eachMessage: async (doc: EachMessagePayload) => {
      logger.info('kafka doc received | consumer');
      subject.next(doc);
    },
  });

  return await new Promise<Consumer>((resolve, reject) => {
    const timeoutSubscription = timer(options?.consumerConectionTimeout || 2000).subscribe(() => {
      reject('timeout process kafka coonsumer invalid');
    });
    consumer.on('consumer.heartbeat', () => {
      logger.info('kafka consumer heartbeat | consumer');
      timeoutSubscription.unsubscribe();
      resolve(consumer);
    });
  });
};

export const kafkaProducer = async (kafka: Kafka, doc: any, topic: string) => {
  const producer = kafka.producer();
  if (producer) {
    await producer.connect();
    logger.info('kafka producer connect | producer');
    await producer.send({
      topic,
      messages: [{ value: JSON.stringify(doc) }],
    });
    logger.info('kafka doc sent | producer');
    await producer.disconnect();
  }
};

export class KafkaObservable {
  private _kafkaNotification: any[] = [];
  private interval$: Observable<number>;
  private subscriber;

  constructor(subjectKafkaConsumer: Subject<any>, intervalNumber: number) {
    this.interval$ = interval(intervalNumber || 1000);
    this.subscriber = subjectKafkaConsumer.subscribe((doc) => {
      this._kafkaNotification.push(JSON.parse(doc?.message?.value?.toString() || '{}'));
      this.subscriber.unsubscribe();
    });
  }

  get kafkaNotification() {
    return this._kafkaNotification;
  }

  listenToKafkaEvent(
    ajvHl7Instance: any,
    schemaValidator: any,
    timerMaxTime: number,
    errorMsg: string,
    // eslint-disable-next-line
    validationFunc?: (data: any[]) => boolean
  ): Promise<boolean> {
    logger.info('listen to kafka event | kafkaObservable');
    return new Promise((resolve, reject) => {
      const subscriptions: Subscription[] = [];
      const intervalSubscription = this.interval$.pipe(take(20)).subscribe(() => {
        if (this._kafkaNotification?.length) {
          for (const payload of this._kafkaNotification) {
            try {
              ajvHl7Instance.validateData(schemaValidator.$id, payload);
              logger.info('kafka doc received and validated | kafkaObservable');
            } catch (error) {
              logger.error('kafka doc received and not validated | kafkaObservable');
              logger.error(error);
              reject(error);
            }
          }

          if (validationFunc && !validationFunc(this._kafkaNotification)) {
            logger.error('kafka doc received and not validated by custom validation function | kafkaObservable');
            reject('custom validation failed');
          }
          subscriptions[0].unsubscribe();
          subscriptions[1].unsubscribe();
          resolve(true);
        }
      });
      const timerSubscription = timer(timerMaxTime || 20000).subscribe(() => {
        subscriptions[0].unsubscribe();
        subscriptions[1].unsubscribe();
        reject(errorMsg || 'timeout: the msg was not sent');
      });
      subscriptions.push(intervalSubscription);
      subscriptions.push(timerSubscription);
    });
  }
}
