import { mongoDbConection, mongoDbDisconect } from './mongodbConection';

export const EXECUTE: string = 'ALL';

before(async () => {
  await mongoDbConection();
});
after(async () => {
  await mongoDbDisconect();
});
