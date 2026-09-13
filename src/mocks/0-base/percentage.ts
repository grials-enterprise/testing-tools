import { Types } from 'mongoose';

export const percentageMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  value: 75,
  name: 'string mock',
  color: 'string mock',
};
