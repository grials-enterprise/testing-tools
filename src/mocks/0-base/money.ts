import { codeableConceptMock } from './codeableConcept';
import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const moneyMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  value: 100.0,
  currency: codeableConceptMock,
  _user: auditUserMock,
};
