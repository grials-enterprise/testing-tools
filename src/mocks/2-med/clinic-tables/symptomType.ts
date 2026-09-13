import { codingMock, auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const symptomTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: [codingMock],
  name: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
