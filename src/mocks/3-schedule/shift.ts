import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../0-base';

export const shiftMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  scheduleProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  day: 'monday',
  startTime: 9,
  endTime: 17,
  licenseKey: 'string mock',
  attenderType: codeableConceptMock,
  shiftType: 'face-to-face',
  active: true,
  _user: auditUserMock,
};
