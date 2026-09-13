import { organizationalChartMock } from '../../1-core/organizationalChart';
import { codeableConceptMock } from '../../0-base';
import { auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const surchargesMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  itemType: 'surcharge',
  name: 'Recargo nocturno',
  description: 'Recargo aplicado por servicios fuera de horario laboral',
  component: organizationalChartMock,
  currency: codeableConceptMock,
  surchargeType: 'percentage',
  fixed: 0,
  percentage: 12,
  isGeneralEstimate: false,
  belongsToGeneralEstimate: false,
  active: true,
  licenseKey: 'SURCH-001-TEST',
  _user: auditUserMock,
};
