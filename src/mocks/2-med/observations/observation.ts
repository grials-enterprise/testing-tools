import { Types } from 'mongoose';
import { specimenTypeMock } from '../../1-core';
import { patientMock } from '../../1-core/patient';
import { serviceRequestMock } from '../medical-orders';
import { annotationMock } from '../../1-core/annotation';
import { bodyRegionMock } from '../../1-core/bodyRegion';
import { practitionerMock } from '../../1-core/practitioner';
import {
  rangeMock,
  ratioMock,
  periodMock,
  quantityMock,
  auditUserMock,
  sampleDataMock,
  referenceRangeMock,
  codeableConceptMock,
} from '../../0-base';

export const observationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Observation',
  basedOn: [serviceRequestMock],
  partOf: [], // Mock data for SchemaTypes.Mixed
  status: 'registered',
  category: codeableConceptMock,
  code: codeableConceptMock,
  subject: patientMock,
  focus: [
    {
      reference: 'string mock',
      type: 'string mock',
      identifier: 'string mock',
      display: 'string mock',
    },
  ],
  encounter: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  evolution: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  effective: {
    effectiveDateTime: new Date('2020-01-01'),
    effectivePeriod: periodMock,
    effectiveTiming: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    effectiveInstant: new Date('2020-01-01'),
  },
  issued: new Date('2020-01-01'),
  performer: [practitionerMock], // Mock data for SchemaTypes.Mixed
  value: {
    valueQuantity: quantityMock,
    valueCodeableConcept: codeableConceptMock,
    valueString: 'string mock',
    interpretation: 'string mock',
    formula: 'string mock',
    name: 'string mock',
    decimals: 2,
    finalResult: 'string mock',
    calculation: 10,
    valueBoolean: false,
    valueInteger: 65,
    valueRange: rangeMock,
    valueRatio: ratioMock,
    valueSampledData: sampleDataMock,
    valueTime: new Date('2020-01-01'),
    valueDateTime: new Date('2020-01-01'),
    valuePeriod: periodMock,
  }, // Mock data for SchemaTypes.Mixed
  dataAbsentReason: codeableConceptMock,
  interpretation: codeableConceptMock,
  note: [annotationMock],
  bodySite: bodyRegionMock,
  method: codeableConceptMock,
  specimen: specimenTypeMock, // Mock data for SchemaTypes.Mixed
  device: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  referenceRange: [
    {
      low: quantityMock,
      high: quantityMock,
      referenceRangeType: codeableConceptMock,
      appliesTo: [codeableConceptMock],
      age: rangeMock,
      text: 'string mock',
    },
  ],
  hasMember: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  derivedFrom: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  component: [
    {
      code: codeableConceptMock,
      valueQuantity: quantityMock,
      valueCodeableConcept: codeableConceptMock,
      valueString: 'string mock',
      valueBoolean: true,
      valueInteger: 1,
      valueRange: rangeMock,
      valueRatio: ratioMock,
      valueSampledData: sampleDataMock,
      valueTime: new Date('2020-01-01'),
      valueDateTime: new Date('2020-01-01'),
      valuePeriod: periodMock,
      dataAbsentReason: codeableConceptMock,
      interpretation: codeableConceptMock,
      referenceRange: referenceRangeMock,
    },
  ],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
