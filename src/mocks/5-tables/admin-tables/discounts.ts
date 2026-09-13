import { organizationalChartMock } from '../../1-core/organizationalChart';
import { codeableConceptMock } from '../../0-base/codeableConcept';
import { auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const discountsMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'Descuento por volumen',
  surchargeType: 'percentage',
  description: 'Descuento aplicado por compras en grandes cantidades',
  component: organizationalChartMock,
  currency: codeableConceptMock,
  discountType: 'percentage',
  fixed: 0,
  percentage: 10,
  isGeneralEstimate: false,
  belongsToGeneralEstimate: false,
  active: true,
  licenseKey: 'DISC-001-TEST',
  _user: auditUserMock,
};
