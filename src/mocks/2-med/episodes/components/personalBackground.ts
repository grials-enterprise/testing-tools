import { Types } from 'mongoose';
import { auditUserMock, codingMock } from '../../../0-base';
import { practitionerMock } from '../../../1-core/practitioner';

export const personalBackgroundMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patientProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  code: codingMock,
  group: 'string mock',
  background: 'string mock',
  comment: 'string mock',
  practitioner: practitionerMock,
  date: new Date('2020-01-01'),
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
