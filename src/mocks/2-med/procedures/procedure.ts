import { Types } from 'mongoose';
import { patientMock } from '../../1-core/patient';
import { auditUserMock, periodMock } from '../../0-base';
import { conditionMock } from '../observations/condition';
import { pathologicalSampleTypeMock, procedureTypeMock } from '../../1-core';
import { practitionerMock } from '../../1-core/practitioner';
import { organizationalChartMock } from '../../1-core/organizationalChart';

export const procedureMock: any = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  reportDate: new Date('2020-01-01'),
  practitionerUser: practitionerMock,
  patient: patientMock,
  period: periodMock,
  patientEgressDate: new Date('2020-01-01'),
  episode: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  isSurgery: false,
  performedProceduresTypes: [procedureTypeMock], // Mock data for SchemaTypes.Mixed
  organization: organizationalChartMock,
  scheduledProceduresTypes: [procedureTypeMock], // Mock data for SchemaTypes.Mixed
  practitioner1: practitionerMock,
  practitioner2: practitionerMock,
  practitioner3: practitionerMock,
  attendee1: practitionerMock,
  attendee2: practitionerMock,
  attendee3: practitionerMock,
  circulating: practitionerMock,
  instrumentalist: practitionerMock,
  anaesthesiologist: practitionerMock,
  description: 'string mock',
  findings: 'string mock',
  anesthesia: 'string mock',
  preopDiagnostic: conditionMock,
  postopDiagnostic: conditionMock,
  complication: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  performedPathologicalAnatomies: [pathologicalSampleTypeMock],
  status: 'preparation',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
