import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const periodMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  start: new Date('2020-01-01'),
  end: new Date('2020-12-31'),
  _user: auditUserMock,
};
