import { auditUserMock, codeableConceptMock } from '../../0-base';
import { practitionerMock } from '../../1-core/practitioner';
import { patientMock } from '../../1-core/patient';
import { medicationMock } from './medication';
import { Types } from 'mongoose';

export const prescriptionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  status: 'active',
  creationDate: new Date('2020-01-01'),
  practitioner: practitionerMock,
  patient: patientMock,
  medications: [
    {
      medication: medicationMock,
      tradeName: 'string mock',
      composition: {
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
      indications: 'string mock',
      quantity: {
        value: 100,
        unit: 'string mock',
        system: 'string mock',
        code: codeableConceptMock,
      },
    },
  ],
  additionalIndications: ['string mock'],
  active: true,
  pdfGenerated: false,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
