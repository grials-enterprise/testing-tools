import { Types } from 'mongoose';
import { auditUserMock } from '../0-base';

export const placeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  scheduleProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  name: 'string mock',
  code: '01234567',
  status: 'busy',
  operatingShifts: [
    {
      day: 'monday',
      startTime: 9,
      endTime: 17,
    },
  ],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
