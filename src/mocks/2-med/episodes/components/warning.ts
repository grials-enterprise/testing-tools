import { Types } from 'mongoose';
import { auditUserMock } from '../../../0-base';
import { practitionerMock } from '../../../1-core/practitioner';

export const warningMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patientProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  text: 'string mock',
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
