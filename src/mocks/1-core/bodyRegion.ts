import { auditUserMock, codingMock, attachmentMock } from '../0-base';
import { Types } from 'mongoose';

export const bodyRegionSubRegionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: [codingMock],
  name: 'string mock',
  _user: auditUserMock,
  licenseKey: 'string mock',
};

export const bodyRegionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  region: 'string mock',
  subregions: [bodyRegionSubRegionMock],
  diagram: attachmentMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
