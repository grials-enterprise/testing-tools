import { codingMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { specimenTypeMock } from '../../1-core';
import { bodyRegionSubRegionMock } from '../../1-core/bodyRegion';
import { Types } from 'mongoose';

export const laboratoryVariableItemMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
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
  licenseKey: 'string mock',
  _user: auditUserMock,
};

export const laboratoryVariableMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  studyType: codeableConceptMock,
  variables: [laboratoryVariableItemMock],
  presetSpecimen: specimenTypeMock,
  presetBodyRegion: {
    ...bodyRegionSubRegionMock,
    region: 'string mock',
  },
  presetCollectionMethod: codeableConceptMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
