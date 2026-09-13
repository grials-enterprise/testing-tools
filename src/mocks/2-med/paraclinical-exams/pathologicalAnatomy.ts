import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const pathologicalAnatomyMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  category: 'PAT',
  examType: 'biopsy',
  examNumber: 'string mock',
  receivedSample: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  sampleQuantity: 1,
  macroscopicDescription: 'string mock',
  microscopicDescription: 'string mock',
  diagnosis: 'string mock',
  comment: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
