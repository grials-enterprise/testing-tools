import { Types } from 'mongoose';

export const auditUserMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  date: new Date('2020-01-01'),
  userId: 'string mock',
  email: 'string mock',
};
