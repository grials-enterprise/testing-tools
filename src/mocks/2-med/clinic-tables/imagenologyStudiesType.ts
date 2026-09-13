import { codingMock, auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const imagenologyStudiesTypeSubTypeMock = {
  _id: new Types.ObjectId().toString(),
  code: [codingMock],
  name: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  __v: 1,
};

export const imagenologyStudiesTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  category: 'string mock',
  examTypes: [imagenologyStudiesTypeSubTypeMock],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
