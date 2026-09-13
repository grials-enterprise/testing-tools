import { Types } from 'mongoose';
import { auditUserMock } from '../0-base/auditUser';
import { codeableConceptMock } from '../0-base/codeableConcept';
import { organizationalChartMock } from './organizationalChart';

export const bankAccountMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  bankName: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  accountNumber: 'string mock',
  iban: 'string mock',
  alias: 'string mock',
  accountType: codeableConceptMock,
  currency: codeableConceptMock,
  component: organizationalChartMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
