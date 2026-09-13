import { codingMock, auditUserMock, codeableConceptMock } from '../0-base';
import { bodyRegionMock } from './bodyRegion';
import { organizationalChartMock } from './organizationalChart';
import { Types } from 'mongoose';

export const procedureTypeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: [codingMock],
  specialty: codeableConceptMock,
  name: 'string mock',
  description: 'string mock',
  findings: 'string mock',
  duration: 60,
  aplicableToProcedures: true,
  aplicableToAppointments: true,
  licenseKey: 'string mock',
  active: true,
  category: 'appointment',
  assistanceMode: codeableConceptMock,
  attachedTo: [organizationalChartMock],
  diagram: bodyRegionMock,
  questionnaires: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  _user: auditUserMock,
};
