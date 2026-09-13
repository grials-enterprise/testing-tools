import { Types } from 'mongoose';
import { periodMock, codingMock, durationMock, auditUserMock, codeableConceptMock } from '../../0-base';
import {
  accountMock,
  patientMock,
  locationMock,
  practitionerMock,
  hospitalizationMock,
  organizationalChartMock,
} from '../../1-core';
import { appointmentMock } from '../../3-schedule';
import { serviceRequestMock } from '../medical-orders';
import { conditionMock, observationMock } from '../observations';

export const encounterMock: any = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Encounter',
  status: 'planned',
  statusHistory: [
    {
      status: 'planned',
      period: periodMock,
    },
  ],
  classHistory: [
    {
      status: codingMock,
      period: periodMock,
    },
  ],
  encounterType: [codeableConceptMock],
  serviceType: codeableConceptMock,
  priority: codeableConceptMock,
  subject: patientMock,
  episodeOfCare: [new Types.ObjectId().toString()], // Mock data for SchemaTypes.ObjectId
  basedOn: [serviceRequestMock],
  participant: [
    {
      participantType: [codeableConceptMock],
      period: periodMock,
      individual: practitionerMock,
    },
  ],
  appointment: [appointmentMock],
  period: periodMock,
  length: durationMock,
  reasonCode: codeableConceptMock,
  reasonReference: [observationMock],
  diagnosis: [
    {
      condition: conditionMock,
      use: codeableConceptMock,
      rank: 1,
    },
  ],
  account: [accountMock],
  hospitalization: hospitalizationMock,
  location: [
    {
      locationPlace: locationMock,
      status: 'planned',
      physicalType: codeableConceptMock,
      period: periodMock,
      comments: 'string mock',
      event: 'admission',
    },
  ],
  serviceProvider: organizationalChartMock,
  partOf: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
