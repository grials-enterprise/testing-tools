import { organizationalChartMock } from './organizationalChart';
import { auditUserMock } from '../0-base';
import { Types } from 'mongoose';

export const ledgerAccountsMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  accountNumber: 'string mock',
  name: 'string mock',
  description: 'string mock',
  parentAccount: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  component: organizationalChartMock,
  active: true,
  _user: auditUserMock,
  licenseKey: 'string mock',
};
