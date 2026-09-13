import * as os from 'os';
import logger from '../../../logger';
import { execCommand } from './exec-command';

export const startContainer = async (
  containerName: string,
  composeFile: string,
  scriptPathPs1: string,
  scriptPathSh: string,
) => {
  const platform = os.platform();
  logger.info(`Starting ${containerName} container...`);

  try {
    switch (platform) {
      case 'win32':
        const commandWin32 = `powershell.exe -ExecutionPolicy Bypass -File ${scriptPathPs1} -composeFile ${composeFile}`;
        try {
          await execCommand(commandWin32);
        } catch (error) {
          throw new Error(`Error starting ${containerName} container: ${error}`);
        }
        break;
      case 'darwin':
      case 'linux':
        try {
          const chmodCommand = `chmod +x ${scriptPathSh}`;
          await execCommand(chmodCommand);
        } catch (error) {
          throw new Error(`Error changing permissions to start Kafka container: ${error}`);
        }
        try {
          const command = `bash ${scriptPathSh} ${composeFile}`;
          await execCommand(command);
        } catch (error) {
          throw new Error(`Error starting Kafka container: ${error}`);
        }
        break;

      default:
        logger.error('Unsupported platform:', platform);
        throw new Error('Unsupported platform');
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
};

export const stopContainer = async (
  containerName: string,
  composeFile: string,
  scriptPathPs1: string,
  scriptPathSh: string,
) => {
  logger.info(`Stoping ${containerName} container...`);
  const platform = os.platform();

  try {
    switch (platform) {
      case 'win32':
        const commandWin32 = `powershell.exe -ExecutionPolicy Bypass -File ${scriptPathPs1} -composeFile ${composeFile}`;
        try {
          await execCommand(commandWin32);
        } catch (error) {
          throw new Error(`Error stoping Kafka container: ${error}`);
        }
        break;
      case 'darwin':
      case 'linux':
        try {
          const chmodCommand = `chmod +x ${scriptPathSh}`;
          await execCommand(chmodCommand);
        } catch (error) {
          throw new Error(`Error changing permissions to stoping Kafka container: ${error}`);
        }
        try {
          const command = `bash ${scriptPathSh} ${composeFile}`;
          await execCommand(command);
        } catch (error) {
          throw new Error(`Error stoping ${containerName} container: ${error}`);
        }
        break;

      default:
        logger.error('Unsupported platform:', platform);
        throw new Error('Unsupported platform');
    }
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
