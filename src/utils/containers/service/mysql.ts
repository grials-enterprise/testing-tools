import * as path from 'path';
import { startContainer, stopContainer } from '../utils';

export const startMysqlContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/start-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/start-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/mysql-compose.yaml');
  await startContainer('Mysql', composeFile, scriptPathPs1, scriptPathSh);
};

export const stopMysqlContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/stop-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/stop-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/mysql-compose.yaml');
  await stopContainer('Mysql', composeFile, scriptPathPs1, scriptPathSh);
};
