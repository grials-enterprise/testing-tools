import { exec } from 'child_process';

export const execCommand = (cmd: string) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (error: any, stdout: any, stderr: any) => {
      if (error) {
        reject(error);
        return;
      }
      if (stderr && error) {
        reject(`${stderr} ${error}`);
        return;
      }
      resolve(stdout);
    });
  });
};
