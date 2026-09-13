import { codingMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const ventilationValueMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  position: 1,
  code: [codingMock],
  name: 'string mock',
  symbol: 'string mock',
  measurementSystem: 'metric',
  unitType: codeableConceptMock,
  unit: codeableConceptMock,
  source: 'manually',
  minValue: 1,
  maxValue: 100,
  decimal: true,
  decimalNumber: 2,
  upperLimit: 100,
  lowerLimit: 1,
  possibleValues: ['string mock'],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
