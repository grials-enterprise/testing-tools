import { Types } from 'mongoose';
import { periodMock, auditUserMock } from '../../0-base';

export const restMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  procedureType: 'medical',
  restType: 'total',
  restPeriod: periodMock,
  _user: auditUserMock,
  licenseKey: 'string mock',
  active: true,
};
