import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../0-base';

export const reminderSettingMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  scheduleProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  licenseKey: 'string mock',
  date: new Date('2020-01-01'),
  startTime: 9,
  endTime: 10,
  patientTypeNotification: codeableConceptMock,
  supplierTypeNotification: codeableConceptMock,
  reminderTime: 0,
  reminderDay: 0,
  _user: auditUserMock,
};
