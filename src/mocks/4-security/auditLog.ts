import { Types } from 'mongoose';

export const auditLogMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  date: new Date(),
  user: 'string mock',
  email: 'string mock',
  userType: 'string mock',
  resource: {
    name: 'string mock',
    operation: 'string mock',
    event: 'string mock',
  },
  licenseKey: 'string mock',
};
