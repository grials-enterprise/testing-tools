import { patientMock } from '../../1-core/patient';
import { practitionerMock } from '../../1-core/practitioner';
import { auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const reportMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patient: patientMock,
  practitioner: practitionerMock,
  registrationDate: new Date(),
  reportDate: new Date('2020-01-01'),
  reference: 'string mock',
  pdfGenerated: false,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
