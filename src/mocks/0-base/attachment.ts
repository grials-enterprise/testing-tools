import { Types } from 'mongoose';
import { auditUserMock } from '.';

export const attachmentMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  contentType: 'string mock',
  language: 'string mock',
  data: 'string mock',
  url: 'string mock',
  size: 12345,
  hash: 'string mock',
  title: 'string mock',
  active: true,
  licenseKey: 'string mock',
  creation: new Date('2020-01-01'),
  _user: auditUserMock,
};
