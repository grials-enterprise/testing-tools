import * as path from 'path';
import { mkdirRecursive, startContainer, stopContainer } from '../utils';

export const startFtpContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/start-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/start-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/ftp-compose.yaml');
  await mkdirRecursive('/tmp/ftp-test-docker/DATA');
  await startContainer('ftp-test', composeFile, scriptPathPs1, scriptPathSh);
};

export const stopFtpContainer = async () => {
  const scriptPathSh = path.resolve(__dirname, '../scripts/stop-container.sh');
  const scriptPathPs1 = path.resolve(__dirname, '../scripts/stop-container.ps1');
  const composeFile = path.resolve(__dirname, '../composeFiles/ftp-compose.yaml');
  await stopContainer('ftp-test', composeFile, scriptPathPs1, scriptPathSh);
};
