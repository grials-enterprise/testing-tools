import { organizationalChartMock } from '../../1-core/organizationalChart';
import { procedureTypeMock } from '../../1-core/procedureType';
import { customerOrganizationMock } from '../../1-core/customerOrganization';
import { auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const rateMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'Tarifa estándar',
  description: 'Tarifa aplicable a procedimientos generales',
  component: organizationalChartMock,
  currency: codeableConceptMock,
  relatedProcedure: procedureTypeMock,
  client: customerOrganizationMock,
  validityStart: new Date('2024-01-01T00:00:00Z'),
  validityEnd: new Date('2024-12-31T23:59:59Z'),
  additionalCode: [codeableConceptMock],
  active: true,
  licenseKey: 'RATE-001-TEST',
  _user: auditUserMock,
};
