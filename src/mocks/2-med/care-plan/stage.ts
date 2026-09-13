import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../../0-base';

export const stageMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: codeableConceptMock,
  value: 1,
  style: {
    backgroundColor: 'string mock',
    color: 'string mock',
  },
  _user: auditUserMock,
  licenseKey: 'string mock',
  active: true,
};
