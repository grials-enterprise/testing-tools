import { patientMock } from '../../1-core/patient';
import { practitionerMock } from '../../1-core/practitioner';
import { auditUserMock } from '../../0-base/auditUser';
import { Types } from 'mongoose';

export const noteMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  title: 'string mock',
  noteDate: new Date('2020-01-01'),
  attendanceDate: new Date('2020-01-01'),
  attendanceHour: 'morning',
  consultationReason: 'string mock',
  diagnosticImpression: 'string mock',
  patient: patientMock,
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
