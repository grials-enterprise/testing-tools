import { Types } from 'mongoose';
import { auditUserMock } from '../0-base';

export const roleMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'Superuser',
  permits: [new Types.ObjectId().toString()], // Mock data for SchemaTypes.ObjectId
  _user: auditUserMock,
};
