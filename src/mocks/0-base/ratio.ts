import { quantityMock } from './quantity';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const ratioMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  numerator: quantityMock,
  denominator: quantityMock,
  _user: auditUserMock,
};
