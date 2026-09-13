import { Types } from 'mongoose';
import { auditUserMock } from '../0-base';

export const remindersMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  licenseKey: 'string mock',
  createdBy: 'string mock',
  eventType: 'string mock',
  eventId: 'string mock',
  procedure: 'string mock',
  recipientType: 'string mock',
  recipientId: 'string mock',
  creationDateTime: new Date('2020-01-01'),
  sendDateTime: new Date('2020-01-01'),
  sended: false,
  active: true,
  _user: auditUserMock,
};
