import { ratioMock, rangeMock, periodMock, quantityMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { annotationMock } from '../../1-core/annotation';
import { practitionerMock } from '../../1-core/practitioner';
import { patientMock } from '../../1-core/patient';
import { locationMock } from '../../1-core/location';
import { specimenMock } from '../specimen';
import { encounterMock } from '../episode-of-care';
import { Types } from 'mongoose';

export const fhirServiceRequestMock: any = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'ServiceRequest',
  status: 'active',
  intent: codeableConceptMock,
  category: [codeableConceptMock],
  priority: 'routine',
  doNotPerform: false,
  code: codeableConceptMock,
  orderDetail: [codeableConceptMock],
  quantityQuantity: quantityMock,
  quantityRatio: ratioMock,
  quantityRange: rangeMock,
  subject: patientMock,
  encounter: encounterMock,
  occurrenceDateTime: new Date('2020-01-01'),
  occurrencePeriod: periodMock,
  occurrenceTiming: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  asNeededBoolean: false,
  asNeededCodeableConcept: codeableConceptMock,
  authoredOn: new Date('2020-01-01'),
  requester: practitionerMock,
  performerType: codeableConceptMock,
  performer: [practitionerMock],
  locationCode: [codeableConceptMock],
  locationReference: [locationMock],
  reasonCode: [codeableConceptMock],
  reasonReference: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  insurance: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  supportingInfo: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  specimen: [specimenMock],
  bodySite: [codeableConceptMock],
  note: [annotationMock],
  patientInstruction: 'string mock',
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
