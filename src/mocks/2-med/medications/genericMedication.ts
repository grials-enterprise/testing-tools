import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock, codingMock } from '../../0-base';

export const genericMedicationDosageCalculationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  dosageUnitType: codeableConceptMock,
  value: codeableConceptMock,
  dosageQuestions: [
    {
      answerType: 'string mock',
      code: codingMock,
      decimals: 2,
      max: 100,
      min: 1,
      possibleValues: [
        {
          value: 'string mock',
          text: 'string mock',
        },
      ],
      questionText: 'string mock',
      requiredAnswer: true,
    },
  ],
  dosageFormula: {
    code: codingMock,
    formula: 'string mock',
  },
  solvent: [
    {
      administrationRoute: codeableConceptMock,
      generic: codeableConceptMock,
      unit: codeableConceptMock,
      formula: 'string mock',
    },
  ],
  licenseKey: 'string mock',
  _user: auditUserMock,
};

export const genericMedicationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  generic: codeableConceptMock,
  dosageCalculation: genericMedicationDosageCalculationMock,
  licenseKey: 'string mock',
  active: true,
  _user: auditUserMock,
};
