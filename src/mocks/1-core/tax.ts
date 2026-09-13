import { auditUserMock, codeableConceptMock } from '../0-base';
import { ledgerAccountsMock } from './ledgerAccounts';
import { organizationalChartMock } from './organizationalChart';
import { Types } from 'mongoose';

export const taxMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  personType: codeableConceptMock,
  currency: codeableConceptMock,
  name: 'string mock',
  description: 'string mock',
  decree: 'string mock',
  taxBase: 1000,
  percentage: 15,
  from: 100,
  subtracting: 50,
  account: ledgerAccountsMock,
  component: organizationalChartMock,
  factorySet: false,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
