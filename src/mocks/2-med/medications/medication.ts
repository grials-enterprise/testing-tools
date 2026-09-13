import { Types } from 'mongoose';
import { codingMock, auditUserMock, codeableConceptMock } from '../../0-base';

export const medicationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: [codingMock],
  tradeName: 'string mock',
  generic: [codeableConceptMock],
  producer: 'string mock',
  indications: ['string mock'],
  instructions: 'string mock',
  composition: [
    {
      presentation: codeableConceptMock,
      dosePerKg: 1,
      frequencySupply: 2,
      totalQuantity: {
        value: 100,
        unitType: codeableConceptMock,
        unit: codeableConceptMock,
      },
      ingredient: [
        {
          ingredientType: codeableConceptMock,
          active: true,
          concentration: {
            value: 10,
            unitType: codeableConceptMock,
            unit: codeableConceptMock,
          },
        },
      ],
    },
  ],
  adverseEffects: 'string mock',
  warnings: 'string mock',
  overdoseInstructions: 'string mock',
  contraindications: [codeableConceptMock],
  dosageCalculation: {
    dosageUnitType: codeableConceptMock,
    value: codeableConceptMock,
    dosageQuestions: [
      {
        answerType: { key: 'value' }, // Mock data for SchemaTypes.Mixed
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
  },
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
