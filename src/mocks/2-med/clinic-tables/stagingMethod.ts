import { auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const stagingMethodMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: codeableConceptMock,
  categories: [
    {
      name: 'string mock',
      symbol: 'string mock',
      values: [
        {
          name: 'string mock',
          symbol: 'string mock',
        },
      ],
    },
  ],
  interpretation: {
    code: 'string mock',
    interpretation: 'string mock',
  },
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
