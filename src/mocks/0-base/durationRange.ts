import { Types } from 'mongoose';
import { auditUserMock } from './auditUser';

export const durationRangeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'string mock',
  value: 12,
  color: '#fff',
  timeUnit: 'min',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
