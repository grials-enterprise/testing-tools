import { codingMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const treatmentTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: [codingMock],
  treatment: 'string mock',
  specialty: codeableConceptMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
