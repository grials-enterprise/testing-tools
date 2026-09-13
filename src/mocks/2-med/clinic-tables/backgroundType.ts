import { auditUserMock, codingMock } from '../../0-base';
import { Types } from 'mongoose';

export const backgroundTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  group: 'string mock',
  types: [
    {
      code: [codingMock],
      name: 'string mock',
    },
  ],
  isFamilyReason: true,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
