import { codingMock, auditUserMock } from '../../0-base';
import { Types } from 'mongoose';

export const biomarkerStudyTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'string mock',
  samples: [
    {
      name: 'string mock',
      results: [
        {
          name: 'string mock',
          code: [codingMock],
          symbol: 'string mock',
          resultType: 'number',
          minValue: 1,
          maxValue: 100,
          possibleResult: [
            {
              type: 'number',
              data: {
                min: 1,
                max: 100,
                symbol: 'string mock',
              },
              name: 'string mock',
              multipleSelect: false,
            },
          ],
          onlyPossibleResult: true,
          isRequired: true,
        },
      ],
    },
  ],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
