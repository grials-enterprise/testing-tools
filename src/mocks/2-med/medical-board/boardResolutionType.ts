import { bodyRegionMock, practitionerMock, specimenTypeMock } from '../../1-core';
import { auditUserMock, codeableConceptMock } from '../../0-base';
import { medicationMock } from '../medications';
import { Types } from 'mongoose';

export const boardResolutionTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  author: [practitionerMock],
  title: 'Sample Board Resolution Type',
  description: 'This is a sample board resolution type description.',
  addresses: [codeableConceptMock],
  goal: 'Sample Goal',
  intent: ['healing', 'palliative'],
  active: true,
  licenseKey: 'ABC123',
  activity: [
    {
      created: new Date(),
      licenseKey: 'XYZ789',
      detail: {
        duration: {
          indeterminated: false,
          activeDays: 5,
          restDays: 2,
          numberOfCycles: 3,
        },
        intent: ['healing'],
        kind: codeableConceptMock,
        code: codeableConceptMock,
        description: 'Sample activity description',
        productReference: medicationMock,
        bodySite: bodyRegionMock,
        sampleBodySite: bodyRegionMock,
        laterality: codeableConceptMock,
        route: codeableConceptMock,
        scheduledTiming: {
          repeat: {
            frequency: 1,
            periodUnit: 'h',
          },
        },
        category: 'Sample Category',
        examType: codeableConceptMock,
        study: {},
        specimenType: specimenTypeMock,
        medicationAdministration: {
          concentrationUnitType: codeableConceptMock,
          concentrationType: codeableConceptMock,
          concentration: 5,
          quantity: 15,
          supplyUnit: codeableConceptMock,
          supply: 20,
          supplyDurationUnit: 'days',
          supplyDuration: 10,
        },
      },
    },
  ],
  isMedicalBoardTemplate: false,
  _user: auditUserMock,
};
