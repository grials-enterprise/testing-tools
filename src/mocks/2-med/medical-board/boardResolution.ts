import { medicationMock } from '../medications';
import { conditionMock } from '../observations';
import { encounterMock } from '../episode-of-care';
import { treatmentTypeMock } from '../clinic-tables';
import {
  bodyRegionMock,
  customerOrganizationMock,
  patientMock,
  practitionerMock,
  specimenTypeMock,
} from '../../1-core';
import { auditUserMock, codeableConceptMock, identifierMock, periodMock, priorityTypeMock } from '../../0-base';
import { specimenMock } from '../specimen';
import { Types } from 'mongoose';

export const boardResolutionMock: any = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  created: new Date(),
  author: [practitionerMock],
  title: 'Sample Board Resolution',
  description: 'This is a sample board resolution description.',
  addresses: [conditionMock],
  goal: 'Sample Goal',
  encounter: encounterMock,
  evolution: '60d21b4667d0d8992e610c85',
  intent: ['healing', 'palliative'],
  status: 'active',
  subject: patientMock,
  period: periodMock,
  active: true,
  template: false,
  licenseKey: 'ABC123',
  identifier: [identifierMock],
  activity: [
    {
      plannedActivityReference: treatmentTypeMock,
      created: new Date(),
      product: medicationMock,
      productReference: codeableConceptMock,
      description: 'Sample activity description',
      via: codeableConceptMock,
      quantity: {
        value: 10,
        unit: 'mg',
        system: 'http://unitsofmeasure.org',
        code: codeableConceptMock,
      },
      goal: ['Sample Goal'],
      duration: {
        indeterminated: false,
        activeDays: 5,
        restDays: 2,
        numberOfCycles: 3,
      },
      scheduledPeriod: {
        period: periodMock,
      },
      scheduleTiming: {
        code: codeableConceptMock,
        value: 1,
      },
      intent: ['healing'],
      priority: priorityTypeMock,
      status: 'active',
      bodySite: bodyRegionMock,
      laterality: codeableConceptMock,
      licenseKey: 'XYZ789',
      identifier: [identifierMock],
      detail: {
        code: codeableConceptMock,
      },
      sample: specimenMock,
      category: 'Sample Category',
      examType: codeableConceptMock,
      specimenType: specimenTypeMock,
      practitioner: practitionerMock,
      supplier: customerOrganizationMock,
      medicationAdministration: {
        concentrationUnitType: codeableConceptMock,
        concentrationType: codeableConceptMock,
        concentration: 5,
        supplyUnit: codeableConceptMock,
        supply: 20,
        supplyDurationUnit: 'days',
        supplyDuration: 10,
        quantity: 15,
      },
    },
  ],
  _user: auditUserMock,
};
