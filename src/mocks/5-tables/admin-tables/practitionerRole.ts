import { taxMock } from '../../1-core/tax';
import { auditUserMock, codeableConceptMock } from '../../0-base';
import { organizationalChartMock } from '../../1-core/organizationalChart';
import { Types } from 'mongoose';

export const practitionerRoleAdminMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: 'PRAC-001',
  name: 'Médico Especialista',
  percentage: 20,
  currency: codeableConceptMock,
  tax: [taxMock],
  component: organizationalChartMock,
  active: true,
  licenseKey: 'PRACROLE-001-TEST',
  _user: auditUserMock,
};
