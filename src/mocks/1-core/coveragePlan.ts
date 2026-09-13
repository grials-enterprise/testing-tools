import { customerOrganizationMock } from './customerOrganization';
import { auditUserMock } from '../0-base';
import { Types } from 'mongoose';

export const coveragePlanMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: 'string mock',
  type: 'string mock',
  name: 'string mock',
  coverageAmount: 100000,
  customerOrganization: customerOrganizationMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
