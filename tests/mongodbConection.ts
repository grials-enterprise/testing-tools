import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
let mongoServer: any;
export const mongoDbConection = async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
};

export const mongoDbDisconect = async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
};
