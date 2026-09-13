import { codeableConceptMock } from './codeableConcept';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const durationMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  value: 'string mock',
  unit: codeableConceptMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
