import { Types } from 'mongoose';
import {
  periodMock,
  durationMock,
  quantityMock,
  auditUserMock,
  humanNameMock,
  identifierMock,
  codeableConceptMock,
} from '../../0-base';
import { patientMock } from '../../1-core/patient';
import { serviceRequestMock } from '../medical-orders';
import { annotationMock } from '../../1-core/annotation';
import { specimenTypeMock } from '../../1-core/specimenType';
import { practitionerMock } from '../../1-core/practitioner';
import { practitionerUserMock } from '../../4-security/practitionerUser';
import { organizationalChartMock } from '../../1-core/organizationalChart';

export const specimenCollectionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  collector: practitionerMock,
  collectedDateTime: new Date('2020-01-01'),
  collectedPeriod: periodMock,
  duration: durationMock, // Mock data for durationSchemaDefinition
  quantity: quantityMock,
  method: codeableConceptMock,
  bodySite: codeableConceptMock,
  fastingStatusCodeableConcept: codeableConceptMock,
  fastingStatusDuration: codeableConceptMock,
  licenseKey: 'string mock',
  _user: auditUserMock,
};

export const specimenMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Specimen',
  identifier: [identifierMock],
  accessionIdentifier: identifierMock,
  status: 'available',
  type: specimenTypeMock,
  subject: patientMock,
  location: [
    {
      locationPlace: organizationalChartMock,
      status: 'string mock',
      period: periodMock,
      comments: 'string mock',
    },
  ],
  performer: practitionerUserMock,
  receivedTime: new Date('2020-01-01'),
  parent: [], // Mock data for SchemaTypes.Mixed
  request: [serviceRequestMock],
  specimenCollection: specimenCollectionMock,
  feature: [
    {
      type: codeableConceptMock,
      description: 'string mock',
    },
  ],
  processing: [
    {
      description: 'string mock',
      procedure: codeableConceptMock,
      additive: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
      timeDateTime: new Date('2020-01-01'),
      timePeriod: periodMock,
    },
  ],
  container: [
    {
      identifier: [identifierMock],
      description: 'string mock',
      containerType: codeableConceptMock,
      capacity: quantityMock,
      specimenQuantity: quantityMock,
      additiveCodeableConcept: codeableConceptMock,
      additiveReference: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    },
  ],
  condition: [codeableConceptMock],
  note: [annotationMock],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  activities: [
    {
      name: 'string mock',
      type: 'sample-create',
      date: 'string mock',
      performer: {
        id: practitionerMock._id,
        name: [humanNameMock],
      }, // Mock data for SchemaTypes.Mixed
    },
  ],
  _user: auditUserMock,
};
