import { bodyRegionMock } from '../../1-core/bodyRegion';
import { auditUserMock } from '../../0-base/auditUser';
import { Types } from 'mongoose';

export const imagingMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  category: 'IMG',
  laterality: 'left',
  bodyRegion: bodyRegionMock,
  finding: 'string mock',
  reason: 'string mock',
  observation: 'string mock',
  conclusion: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
