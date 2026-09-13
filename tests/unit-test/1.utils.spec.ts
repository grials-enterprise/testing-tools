import { EXECUTE } from '../setup';
import {
  kafkaConsumer,
  kafkaProducer,
  getKafkaClient,
  KafkaObservable,
  checkHealingKafka,
  generarBearerToken,
} from '../../src/utils';
import { assert } from 'console';
import { EachMessagePayload } from 'kafkajs';
import { Subject } from 'rxjs';

describe('utils', function () {
  if (EXECUTE !== '1' && EXECUTE !== 'ALL') {
    console.log('skipping containers tests');
    return;
  }
  this.timeout('360s');
  it('succes, start postgresql', async function () {
    const service = require('../../src/utils/containers/service');
    await service.startPostgresqlContainer();
  });
  it('succes, start mongodb', async function () {
    const service = require('../../src/utils/containers/service');
    await service.startMongoDbContainer();
  });
  it('succes, start mysql', async function () {
    const service = require('../../src/utils/containers/service');
    await service.startMysqlContainer();
  });
  it('succes, start redis', async function () {
    const service = require('../../src/utils/containers/service');
    await service.startRedisContainer();
  });
  it('succes, start kafka', async function () {
    const service = require('../../src/utils/containers/service');
    await service.startKafkaContainer();
  });
  it('succes, start kafka operations', async function () {
    await new Promise((resolve) => setTimeout(resolve, 10000)); // wait for kafka to be ready
    const kafkaSubject = new Subject<EachMessagePayload>();
    const kafkaObservable = new KafkaObservable(kafkaSubject, 1000);
    // const ajv = startSchemasValidators(['codeableConcept']);

    const kafka = getKafkaClient(['localhost:9092'], 'my-app', 0);
    const response = await checkHealingKafka(kafka);
    if (!response) {
      throw new Error('kafka is not ready');
    }
    const kafkaConsumerClient = await kafkaConsumer(kafka, 'test_kafka_id', ['test_payload'], kafkaSubject, {
      consumerConectionTimeout: 10000,
    });

    await kafkaProducer(
      kafka,
      {
        text: 'This is a test message for codeable concept',
      },
      'test_payload'
    );
    // await kafkaObservable.listenToKafkaEvent(
    //   ajv,
    //   codeableConceptSchemaValidator,
    //   20000,
    //   'timeout: codeable concept msg not received'
    // );
    await kafkaConsumerClient.disconnect();
  });
  it('succes, stop kafka', async function () {
    const service = require('../../src/utils/containers/service');

    await service.stopKafkaContainer();
  });
  it('succes, stop postgresql', async function () {
    const service = require('../../src/utils/containers/service');
    await service.stopPostgresqlContainer();
  });
  it('succes, stop mongodb', async function () {
    const service = require('../../src/utils/containers/service');
    await service.stopMongoDbContainer();
  });
  it('succes, stop mysql', async function () {
    const service = require('../../src/utils/containers/service');
    await service.stopMysqlContainer();
  });
  it('succes, stop redis', async function () {
    const service = require('../../src/utils/containers/service');
    await service.stopRedisContainer();
  });

  it('succes, generarBearerToken', async function () {
    const info = { id: 123, nombre: 'Juan', rol: 'admin' };
    const secret = 'mi_clave_secreta_super_segura';
    const bearerToken = generarBearerToken(info, secret);

    assert(bearerToken.startsWith('Bearer '), 'The token should start with "Bearer "');
  });
});
