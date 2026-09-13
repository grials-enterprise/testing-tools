import { auditUserMock, attachmentMock, identifierMock } from '../../0-base';
import { patientMock } from '../../1-core/patient';
import { Types } from 'mongoose';

export const patientFileMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  date: new Date(),
  patient: patientMock,
  user: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  description: 'string mock',
  file: attachmentMock,
  active: true,
  licenseKey: 'string mock',
  identifier: [identifierMock],
  _user: auditUserMock,
};
