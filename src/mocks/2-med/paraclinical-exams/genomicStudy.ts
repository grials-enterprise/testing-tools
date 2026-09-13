import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const genomicStudyMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  category: 'GE',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
