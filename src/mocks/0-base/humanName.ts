import { periodMock } from './period';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const humanNameMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  use: 'usual',
  text: 'John Doe',
  family: 'Doe',
  given: ['John'],
  prefix: ['Mr.'],
  suffix: ['Jr.'],
  period: periodMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
