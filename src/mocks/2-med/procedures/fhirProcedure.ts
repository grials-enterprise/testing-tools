import { auditUserMock, codeableConceptMock, periodMock, rangeMock } from '../../0-base';
import { annotationMock } from '../../1-core/annotation';
import { practitionerMock } from '../../1-core/practitioner';
import { patientMock } from '../../1-core/patient';
import { organizationalChartMock } from '../../1-core/organizationalChart';
import { locationMock } from '../../1-core/location';
import { conditionMock } from '../observations';
import { serviceRequestMock } from '../medical-orders';
import { encounterMock } from '../episode-of-care';
import { Types } from 'mongoose';

export const fhirProcedureMock: any = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Procedure',
  instantiatesCanonical: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  instantiatesUri: ['string mock'],
  basedOn: [serviceRequestMock],
  partOf: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  status: 'in-progress',
  statusReason: codeableConceptMock,
  category: codeableConceptMock,
  code: codeableConceptMock,
  subject: patientMock,
  encounter: encounterMock,
  performedDateTime: new Date('2020-01-01'),
  performedPeriod: periodMock,
  performedString: 'string mock',
  performedAge: 30,
  performedRange: rangeMock,
  recorder: practitionerMock,
  asserter: practitionerMock,
  performer: [
    {
      function: codeableConceptMock,
      actor: { key: 'value' }, // Mock data for SchemaTypes.Mixed
      onBehalfOf: organizationalChartMock,
    },
  ],
  location: locationMock,
  reasonCode: [codeableConceptMock],
  reasonReference: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  bodySite: [codeableConceptMock],
  outcome: codeableConceptMock,
  report: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  complication: [codeableConceptMock],
  complicationDetail: [conditionMock],
  followUp: [codeableConceptMock],
  note: [annotationMock],
  focalDevice: [
    {
      action: codeableConceptMock,
      manipulated: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    },
  ],
  usedReference: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  usedCode: [codeableConceptMock],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
