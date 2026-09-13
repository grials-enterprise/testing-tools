import { codeableConceptMock } from './codeableConcept';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const communicationMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  active: true,
  licenseKey: 'string mock',
  __v: 0,
  language: codeableConceptMock,
  preferred: true,
  _user: auditUserMock,
};
