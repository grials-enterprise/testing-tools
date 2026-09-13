import { quantityMock } from './quantity';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const rangeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  low: quantityMock,
  high: quantityMock,
  _user: auditUserMock,
};
