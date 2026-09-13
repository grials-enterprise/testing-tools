import * as path from 'path';
import { startContainer, stopContainer } from '../utils';

export const startKafkaContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/start-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/start-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/kafka-compose.yaml');
  await startContainer('Kafka', composeFile, scriptPathPs1, scriptPathSh);
};

export const stopKafkaContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/stop-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/stop-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/kafka-compose.yaml');
  await stopContainer('Kafka', composeFile, scriptPathPs1, scriptPathSh);
};
