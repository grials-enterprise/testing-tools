import { codeMock } from '../../1-core/code';
import { organizationalChartMock } from '../../1-core/organizationalChart';
import { auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const autoCalculationsMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'Cálculo automático de egreso',
  relatedTo: 'Alta médica',
  duration: '48h',
  endTime: '18:00',
  exitHour: 18,
  codeToApply: codeMock,
  percentage: 15,
  discountPercentageFirst: 5,
  discountPercentageSecond: 3,
  discountPercentagethird: 2,
  serviceCodeReference: codeMock,
  serviceCodeToApply: codeMock,
  relatedAction: 'Descuento por pronto pago',
  department: organizationalChartMock,
  dischargeCondition: codeableConceptMock,
  component: organizationalChartMock,
  active: true,
  licenseKey: 'LIC-123-TEST',
  _user: auditUserMock,
};
