import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

export const mkdir = async (url: string) => {
  const exists = util.promisify(fs.exists);
  const mkdir = util.promisify(fs.mkdir);
  if (await exists(url)) return true;

  await mkdir(url);

  return true;
};

export const mkdirRecursive = async (dirPath: string) => {
  const mkdir = util.promisify(fs.mkdir);
  const access = util.promisify(fs.access);
  try {
    await access(dirPath);
    return true;
  } catch {
    const parent = path.dirname(dirPath);
    if (parent !== dirPath) {
      await mkdirRecursive(parent);
    }
    await mkdir(dirPath);
    return true;
  }
};
