import { auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const activityTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  activity: 'string mock',
  values: [
    {
      valueType: 'number',
      value: 123,
      minValue: 1,
      maxValue: 100,
      possiblesValue: { key: 'value' }, // Mock data for SchemaTypes.Mixed
      onlyPossiblesValue: true,
      isRequired: true,
    },
  ],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
