import * as path from 'path';
import { startContainer, stopContainer } from '../utils';

export const startMongoDbContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/start-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/start-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/mongodb-compose.yaml');
  await startContainer('MongoDB', composeFile, scriptPathPs1, scriptPathSh);
};

export const stopMongoDbContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/stop-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/stop-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/mongodb-compose.yaml');
  await stopContainer('MongoDB', composeFile, scriptPathPs1, scriptPathSh);
};
