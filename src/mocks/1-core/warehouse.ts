import { Types } from 'mongoose';
import { auditUserMock, addressMock, identifierMock, codeableConceptMock } from '../0-base';
import { organizationalChartMock } from './organizationalChart';

export const warehouseMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  component: organizationalChartMock,
  managingOrganization: organizationalChartMock,
  status: 'active',
  name: 'string mock',
  code: 'ABCDE',
  alias: ['string mock'],
  identifier: [identifierMock],
  address: addressMock,
  description: 'string mock',
  warehouseAttributes: [codeableConceptMock],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
