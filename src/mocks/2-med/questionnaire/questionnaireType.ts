import { Types } from 'mongoose';
import { codingMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { practitionerUserMock } from '../../4-security';
import { bodyMeasurementTypeMock, laboratoryVariableItemMock, laboratoryVariableMock } from '../clinic-tables';

export const questionnaireTypeQuestionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  answerType: 'number', // Mock data for SchemaTypes.Mixed
  bodyMeasurement: bodyMeasurementTypeMock, // Mock data for SchemaTypes.Mixed
  prefill: 'string mock',
  decimals: 2,
  examType: laboratoryVariableMock, // Mock data for SchemaTypes.Mixed
  indicatorType: 'string mock',
  max: 100,
  min: 1,
  multipleSelect: true,
  possibleValues: [
    {
      value: 'string mock',
      text: 'string mock',
    },
  ],
  prefix: 'string mock',
  questionText: 'string mock',
  requiredAnswer: true,
  text: 'string mock',
  variableToUse: laboratoryVariableItemMock, // Mock data for SchemaTypes.Mixed
  recordToUse: 'first',
  code: codingMock,
  conditions: [
    {
      name: 'string mock',
      condition: 'string mock',
      otherQuestions: ['string mock', 'string mock'],
    },
  ],
};

export const questionnaireTypeSectionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'string mock',
  questions: ['string mock'],
};

export const questionnaireTypeResultMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: codingMock,
  decimals: 2,
  formula: 'string mock',
  interpretation: 'string mock',
  name: 'string mock',
};

export const questionnaireTypeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  date: new Date('2020-01-01'),
  code: codingMock,
  description: 'string mock',
  publisher: practitionerUserMock, // Mock data for SchemaTypes.Mixed
  purpose: 'string mock',
  title: 'string mock',
  specialty: [codeableConceptMock],
  sections: [questionnaireTypeSectionMock],
  questions: [questionnaireTypeQuestionMock],
  results: [questionnaireTypeResultMock],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
