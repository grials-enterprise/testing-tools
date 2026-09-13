import { Types } from 'mongoose';
import { practitionerMock } from '../../../1-core/practitioner';
import { codingMock, auditUserMock, codeableConceptMock } from '../../../0-base';

export const familyBackgroundMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patientProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  code: codingMock,
  date: new Date('2020-01-01'),
  familyName: 'string mock',
  relationship: codeableConceptMock,
  status: 'alive',
  age: 50,
  group: 'string mock',
  background: 'string mock',
  comment: 'string mock',
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
