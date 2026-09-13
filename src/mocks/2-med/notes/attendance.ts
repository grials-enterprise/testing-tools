import { patientMock } from '../../1-core/patient';
import { practitionerMock } from '../../1-core/practitioner';
import { auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const attendanceMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  title: 'string mock',
  attendanceDate: new Date('2020-01-01'),
  attendanceHour: 'morning',
  consultationReason: 'string mock',
  diagnosticImpression: 'string mock',
  patient: patientMock,
  practitioner: practitionerMock,
  licenseKey: 'string mock',
  active: true,
  _user: auditUserMock,
};
