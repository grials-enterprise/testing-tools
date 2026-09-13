import { codingMock, auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const clinicalLaboratoryCategoryMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  studyType: 'string mock',
  study: [
    {
      protocol: 'string mock',
      results: [
        {
          code: [codingMock],
          name: 'string mock',
          symbol: 'string mock',
          unit: 'string mock',
          valueType: 'numeric',
          possibleValues: [
            {
              value: 'string mock',
            },
          ],
          decimal: true,
          decimalNumber: 2,
          minValue: 1,
          maxValue: 100,
          upperLimit: 100,
          lowerLimit: 1,
        },
      ],
    },
  ],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
