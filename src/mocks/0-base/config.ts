import { Types } from 'mongoose';
import { auditUserMock } from './auditUser';

export const configMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  demographicDataRequired: true,
  historySerialization: {
    active: true,
    currentNumber: 1,
    recordSource: 'user-input',
  },
  licenseKey: 'string mock',
  active: true,
  _user: auditUserMock,
};
