import { auditUserMock } from '../../0-base';
import { patientMock } from '../../1-core/patient';
import { Types } from 'mongoose';

export const patientProfileMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patient: patientMock,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
