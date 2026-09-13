import { Types } from 'mongoose';
import { auditUserMock, humanNameMock, identifierMock } from '../../0-base';

export const acompanistMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  acompanistName: humanNameMock,
  acompanistIdentifier: identifierMock,
  _user: auditUserMock,
  active: true,
  licenseKey: 'string mock',
};
