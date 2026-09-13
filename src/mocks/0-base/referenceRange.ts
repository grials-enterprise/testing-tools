import { quantityMock } from './quantity';
import { codeableConceptMock } from './codeableConcept';
import { rangeMock } from './range';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const referenceRangeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  low: quantityMock,
  high: quantityMock,
  type: codeableConceptMock,
  appliesTo: codeableConceptMock,
  age: rangeMock,
  text: 'string mock',
  _user: auditUserMock,
};
