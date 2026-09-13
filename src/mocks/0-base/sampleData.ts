import { quantityMock } from './quantity';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const sampleDataMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  origin: quantityMock,
  period: 10,
  factor: 1.5,
  lowerLimit: 0,
  upperLimit: 100,
  dimensions: 3,
  data: 'string mock',
  _user: auditUserMock,
};
