import { Types } from 'mongoose';
import { practitionerMock } from '../../../1-core/practitioner';
import { auditUserMock, codeableConceptMock } from '../../../0-base';

export const evolutionDiagnosisMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  evolution: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  practitioner: practitionerMock,
  diagnosisType: codeableConceptMock,
  code: codeableConceptMock,
  category: 'string mock',
  diagnosisDescription: 'string mock',
  observation: 'string mock',
  status: codeableConceptMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
