import { Types } from 'mongoose';
import { auditUserMock } from './auditUser';

export const codingMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  licenseKey: 'string mock',
  __v: 0,
  active: true,
  system: 'string mock',
  version: 'string mock',
  code: 'string mock',
  display: 'string mock',
  userSelected: true,
  _user: auditUserMock,
};
