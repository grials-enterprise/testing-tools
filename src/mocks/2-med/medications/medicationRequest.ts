import { Types } from 'mongoose';
import { dosageMock } from './dosage';
import { patientMock } from '../../1-core/patient';
import { encounterMock } from '../episode-of-care';
import { organizationalChartMock } from '../../1-core';
import { annotationMock } from '../../1-core/annotation';
import { practitionerMock } from '../../1-core/practitioner';
import { periodMock, auditUserMock, identifierMock, codeableConceptMock } from '../../0-base';

export const medicationRequestMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'MedicationRequest',
  status: 'active',
  statusReason: codeableConceptMock,
  intent: codeableConceptMock,
  category: [codeableConceptMock],
  priority: codeableConceptMock,
  doNotPerform: false,
  reportedBoolean: false,
  reportedReference: organizationalChartMock, // Mock data for SchemaTypes.Mixed
  medicationCodeableConcept: codeableConceptMock,
  medicationReference: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  subject: patientMock,
  encounter: encounterMock,
  supportingInformation: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  authoredOn: new Date('2020-01-01'),
  requester: practitionerMock,
  performer: practitionerMock,
  performerType: codeableConceptMock,
  recorder: practitionerMock,
  reasonCode: [codeableConceptMock],
  reasonReference: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  instantiatesCanonical: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  instantiatesUri: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  basedOn: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  groupIdentifier: identifierMock,
  courseOfTherapyType: codeableConceptMock,
  insurance: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  note: [annotationMock],
  dosageInstruction: [dosageMock],
  dispenseRequest: {
    initialFill: {
      quantity: 'string mock',
      duration: 'string mock',
    },
    dispenseInterval: 30,
    validityPeriod: periodMock,
    numberOfRepeatsAllowed: 2,
    quantity: 'string mock',
    expectedSupplyDuration: 'string mock',
  },
  substitution: {
    allowed: true,
    reason: codeableConceptMock,
  },
  priorPrescription: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  detectedIssue: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  eventHistory: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  recordedDate: new Date('2020-01-01'),
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
