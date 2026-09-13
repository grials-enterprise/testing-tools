import { auditUserMock, codeableConceptMock, codingMock } from '../../0-base';
import { stagingMethodMock } from './stagingMethod';
import { Types } from 'mongoose';

export const diagnosticMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  group: 'string mock',
  types: [
    {
      code: [codingMock],
      name: 'string mock',
    },
  ],
  specialty: codeableConceptMock,
  active: true,
  licenseKey: 'string mock',
  staging: {
    methods: [stagingMethodMock],
  },
  _user: auditUserMock,
};
