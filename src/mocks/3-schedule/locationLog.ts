import { Types } from 'mongoose';
import { patientMock } from '../1-core/patient';
import { periodMock, auditUserMock } from '../0-base';
import { practitionerMock } from '../1-core/practitioner';

export const locationLogMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  location: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  period: periodMock,
  event: 'string mock',
  action: 'string mock',
  performer: practitionerMock,
  patient: patientMock,
  statusChange: 'availableToBusy',
  comments: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
