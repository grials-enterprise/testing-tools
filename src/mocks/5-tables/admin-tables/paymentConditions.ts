import { organizationalChartMock } from '../../1-core/organizationalChart';
import { auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const paymentConditionsMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'Pago a 30 días',
  numberDays: 30,
  component: organizationalChartMock,
  active: true,
  licenseKey: 'PAYCOND-001-TEST',
  _user: auditUserMock,
};
