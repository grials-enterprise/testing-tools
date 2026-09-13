import { Types } from 'mongoose';
import { auditUserMock } from './auditUser';

export const effectiveDateMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  effectiveDateTime: new Date('2020-01-01'),
  effectivePeriod: new Date('2020-01-01'),
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
