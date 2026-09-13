import { backgroundMock } from './clinical/background';
import { auditUserMock } from '../0-base';
import { Types } from 'mongoose';

export const meetingSettingMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  background: backgroundMock,
  patientsUrl: 'string mock',
  suppliersUrl: 'string mock',
  licenseKey: 'string mock',
  active: true,
  _user: auditUserMock,
};
