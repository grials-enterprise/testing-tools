import { practitionerUserMock } from '../../4-security';
import { codingMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const functionalTestTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  type: codeableConceptMock,
  publisher: practitionerUserMock, // Mock data for SchemaTypes.Mixed
  subCategories: [
    {
      code: codingMock,
      title: 'string mock',
      resultTypes: [
        {
          code: codingMock,
          name: 'string mock',
          resultName: 'string mock',
          resultType: 'text', // Mock data for SchemaTypes.Mixed
          symbol: 'string mock',
          decimals: 2,
          max: 100,
          min: 1,
          possibleValues: [
            {
              value: 'string mock',
              text: 'string mock',
            },
          ],
          requiredAnswer: true,
          text: 'string mock',
        },
      ],
      calculation: [
        {
          code: codingMock,
          formula: 'string mock',
          interpretation: 'string mock',
          name: 'string mock',
        },
      ],
    },
  ],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
