import { Types } from 'mongoose';
import { patientMock } from '../../1-core/patient';
import { practitionerMock } from '../../1-core/practitioner';
import { periodMock, codingMock, auditUserMock, attachmentMock } from '../../0-base';

export const paraclinicalExamMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  category: 'string mock',
  examType: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  code: [codingMock],
  practitionerUser: practitionerMock,
  patient: patientMock,
  receptionDate: new Date('2020-01-01'),
  studyDate: new Date('2020-01-01'),
  practitionerSigner: 'string mock',
  institution: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  status: 'registered',
  effectivePeriod: periodMock,
  episode: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  conclusionCode: [codingMock],
  file: [attachmentMock],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
