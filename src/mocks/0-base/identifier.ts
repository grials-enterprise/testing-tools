import { codeableConceptMock } from './codeableConcept';
import { periodMock } from './period';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const identifierMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  use: 'usual',
  identifierType: codeableConceptMock,
  system: 'string mock',
  value: 'string mock',
  period: periodMock,
  assigner: { display: 'string mock' },
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
