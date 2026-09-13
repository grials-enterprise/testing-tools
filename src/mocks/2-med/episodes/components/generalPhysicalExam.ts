import { auditUserMock, vitalSignMock } from '../../../0-base';
import { bodyMeasureMock } from './bodyMeasure';
import { practitionerMock } from '../../../1-core/practitioner';
import { Types } from 'mongoose';

export const generalPhysicalExamMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  date: new Date('2020-01-01'),
  practitioner: practitionerMock,
  description: 'string mock',
  vitalSign: vitalSignMock,
  bodyMeasure: bodyMeasureMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
