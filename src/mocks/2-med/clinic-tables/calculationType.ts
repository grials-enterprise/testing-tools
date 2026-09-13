import { codingMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const calculationTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  position: 'string mock',
  code: [codingMock],
  name: 'string mock',
  symbol: 'string mock',
  studyType: 'string mock',
  measurementSystem: 'metric',
  unitType: codeableConceptMock,
  unit: codeableConceptMock,
  source: 'string mock',
  calculationVariables: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  equation: 'string mock',
  upperLimit: 100,
  lowerLimit: 1,
  indicators: [
    {
      name: 'string mock',
      maxValue: 100,
      minValue: 1,
      possiblesValue: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
      possiblesTextValue: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
      type: 'string mock',
    },
  ],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
