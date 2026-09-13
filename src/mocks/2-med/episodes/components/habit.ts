import { Types } from 'mongoose';
import { auditUserMock } from '../../../0-base';
import { habitTypeMock } from '../../clinic-tables';
import { practitionerMock } from '../../../1-core/practitioner';

export const habitMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patientProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  habitType: habitTypeMock, // Mock data for SchemaTypes.Mixed
  description: 'string mock',
  comment: 'string mock',
  practitioner: practitionerMock,
  date: new Date('2020-01-01'),
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
