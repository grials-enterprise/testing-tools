import { Types } from 'mongoose';
import { codingMock, auditUserMock } from '../../0-base';

export const biomarkerStudyMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  category: 'BIO',
  examNumber: 'string mock',
  receivedSample: 'string mock',
  active: true,
  licenseKey: 'string mock',
  results: [
    {
      result: {
        name: 'string mock',
        code: codingMock,
        value: { key: 'value' }, // Mock data for SchemaTypes.Mixed
        minValue: 1,
        maxValue: 100,
        possiblesValue: { key: 'value' }, // Mock data for SchemaTypes.Mixed
        onlyPossiblesValue: true,
        isRequired: true,
      },
      value: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    },
  ],
  comment: 'string mock',
  _user: auditUserMock,
};
