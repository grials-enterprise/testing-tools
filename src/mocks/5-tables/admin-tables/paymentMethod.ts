import { ledgerAccountsMock } from '../../1-core/ledgerAccounts';
import { taxMock } from '../../1-core/tax';
import { auditUserMock, codeableConceptMock } from '../../0-base';
import { organizationalChartMock } from '../../1-core/organizationalChart';
import { Types } from 'mongoose';

export const paymentMethodMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'Transferencia bancaria',
  relatedTaxes: [taxMock],
  percentageAdjust: 2.5,
  ledgerAccountReference: ledgerAccountsMock,
  requiredFields: [codeableConceptMock],
  component: organizationalChartMock,
  active: true,
  licenseKey: 'PAYMETH-001-TEST',
  _user: auditUserMock,
};
