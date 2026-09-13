import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const referenceMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  referedPractitioner: 'string mock',
  institution: 'string mock',
  service: 'string mock',
  clinicalSummary: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
