import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const quantityMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  value: 100,
  comparator: 'string mock',
  unit: 'string mock',
  system: 'string mock',
  code: 'string mock',
  _user: auditUserMock,
};
