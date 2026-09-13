import { Types } from 'mongoose';
import { auditUserMock, periodMock } from '../../0-base';

export const proceduresReportMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  procedureId: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  status: 'string mock',
  description: 'string mock',
  findings: 'string mock',
  organization: 'string mock',
  anesthesia: 'string mock',
  instrumentalist: 'string mock',
  anaesthesiologist: 'string mock',
  circulating: 'string mock',
  complication: ['string mock'],
  isSurgery: false,
  performedProceduresTypes: ['string mock'],
  scheduledProceduresTypes: ['string mock'],
  period: periodMock,
  postoperationDiagnostic: 'string mock',
  practitionerUser: 'string mock',
  practitioners: ['string mock'],
  attendees: ['string mock'],
  preoperationDiagnostic: 'string mock',
  reportDate: 'string mock',
  patientEgressDate: 'string mock',
  _user: auditUserMock,
};
