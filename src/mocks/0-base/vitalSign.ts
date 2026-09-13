import { auditUserMock } from './auditUser';
import { Types } from 'mongoose';

export const vitalSignMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  heartRate: 72,
  breathingRate: 16,
  oxygenSaturation: 98,
  temperature: 37.0,
  systolicBloodPressure: 120,
  diastolicBloodPressure: 80,
  halfBloodPressure: 100,
  JNC7: 'normal',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
