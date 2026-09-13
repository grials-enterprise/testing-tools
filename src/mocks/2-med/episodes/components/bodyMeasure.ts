import { auditUserMock, codeableConceptMock } from '../../../0-base';
import { Types } from 'mongoose';

export const bodyMeasureMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  active: true,
  licenseKey: 'string mock',
  weight: {
    massUnit: codeableConceptMock,
    value: 70,
  },
  height: {
    lengthUnit: codeableConceptMock,
    value: 175,
  },
  armCircumference: {
    lengthUnit: codeableConceptMock,
    value: 30,
  },
  hipCircumference: {
    lengthUnit: codeableConceptMock,
    value: 90,
  },
  abdomenCircumference: {
    lengthUnit: codeableConceptMock,
    value: 85,
  },
  waistCircumference: {
    lengthUnit: codeableConceptMock,
    value: 80,
  },
  rightKneeCircumference: {
    lengthUnit: codeableConceptMock,
    value: 40,
  },
  leftKneeCircumference: {
    lengthUnit: codeableConceptMock,
    value: 40,
  },
  rightThighCircumference: {
    lengthUnit: codeableConceptMock,
    value: 50,
  },
  leftThighCircumference: {
    lengthUnit: codeableConceptMock,
    value: 50,
  },
  tricepCrease: {
    lengthUnit: codeableConceptMock,
    value: 10,
  },
  subscapularCrease: {
    lengthUnit: codeableConceptMock,
    value: 12,
  },
  muscularArea: {
    areaUnit: codeableConceptMock,
    value: 25,
  },
  fatArea: {
    areaUnit: codeableConceptMock,
    value: 20,
  },
  _user: auditUserMock,
};
