import { practitionerMock } from './practitioner';
import { auditUserMock } from '../0-base/auditUser';
import { Types } from 'mongoose';

export const annotationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  active: true,
  licenseKey: 'string mock',
  author: practitionerMock,
  time: new Date('2020-01-01'),
  text: 'string mock',
  _user: auditUserMock,
};
