import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../../../0-base';
import { practitionerMock } from '../../../1-core/practitioner';
import { procedureTypeMock } from '../../../1-core/procedureType';
import { treatmentTypeMock } from '../../clinic-tables/treatmentType';
import { medicationMock } from '../../medications/medication';

export const treatmentMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  episode: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  practitioner: practitionerMock,
  treatmentType: treatmentTypeMock,
  prescriptionMedication: {
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
  },
  procedure: procedureTypeMock,
  description: 'string mock',
  undefinedTreatment: false,
  treatmentDuration: 30,
  suspendedTreatment: false,
  reasonSuspension: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
