import { codeableConceptMock } from './codeableConcept';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const disabilityMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  type: codeableConceptMock,
  gradeArray: codeableConceptMock,
  percentage: 75,
  grade: 'string mock',
  identifier: 'string mock',
  _user: auditUserMock,
};
