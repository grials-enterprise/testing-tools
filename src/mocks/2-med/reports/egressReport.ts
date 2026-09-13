import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const egressReportMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  egressDate: new Date('2020-01-01'),
  procedureDate: new Date('2020-01-01'),
  nextConsultationDate: new Date('2020-01-01'),
  procedureReason: 'string mock',
  diagnosis: 'string mock',
  treatment: 'string mock',
  complications: 'string mock',
  recommendations: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
