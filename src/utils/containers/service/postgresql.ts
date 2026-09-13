import * as path from 'path';
import { startContainer, stopContainer } from '../utils';

export const startPostgresqlContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/start-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/start-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/postgresql-compose.yaml');
  await startContainer('Postgresql', composeFile, scriptPathPs1, scriptPathSh);
};

export const stopPostgresqlContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/stop-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/stop-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/postgresql-compose.yaml');
  await stopContainer('Postgresql', composeFile, scriptPathPs1, scriptPathSh);
};
