import { periodMock } from './period';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const contactPointMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  active: true,
  licenseKey: 'string mock',
  system: 'phone',
  value: 'string mock',
  use: 'home',
  rank: 1,
  period: periodMock,
  _user: auditUserMock,
};
