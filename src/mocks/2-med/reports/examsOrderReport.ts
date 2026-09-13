import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const examsOrderReportMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  examOrderId: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  bodyRegion: 'string mock',
  category: 'string mock',
  comment: 'string mock',
  provider: 'string mock',
  examType: 'string mock',
  laterality: 'string mock',
  practitioner: 'string mock',
  referredPractitioner: 'string mock',
  priority: 'string mock',
  programmingDate: 'string mock',
  sample: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
