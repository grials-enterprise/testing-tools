import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const customReportMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  active: true,
  licenseKey: 'string mock',
  customContent: 'string mock',
  _user: auditUserMock,
};
