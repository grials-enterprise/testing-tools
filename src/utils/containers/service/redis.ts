import * as path from 'path';
import { startContainer, stopContainer } from '../utils';

export const startRedisContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/start-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/start-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/redis-compose.yaml');
  await startContainer('Redis', composeFile, scriptPathPs1, scriptPathSh);
};

export const stopRedisContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/stop-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/stop-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/redis-compose.yaml');
  await stopContainer('Redis', composeFile, scriptPathPs1, scriptPathSh);
};
