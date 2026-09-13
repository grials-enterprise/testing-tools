import { categoryMock } from './category';
import { ledgerAccountsMock } from './ledgerAccounts';
import { auditUserMock, codeableConceptMock } from '../0-base';
import { organizationalChartMock } from './organizationalChart';
import { Types } from 'mongoose';

export const codeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  textName: 'string mock',
  text: 'string mock',
  code: 'string mock',
  name: 'string mock',
  description: 'string mock',
  codeType: 'product',
  sku: 'string mock',
  category: categoryMock,
  subcategory: {
    name: 'string mock',
    initials: 'string mock',
    _id: 'string mock',
  },
  account: ledgerAccountsMock,
  component: organizationalChartMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
  additionalCode: [codeableConceptMock],
};
