import { Types } from 'mongoose';
import { patientMock } from '../../1-core/patient';
import { annotationMock } from '../../1-core/annotation';
import { practitionerMock } from '../../1-core/practitioner';
import { auditUserMock, codeableConceptMock, periodMock } from '../../0-base';

export const medicationAdministrationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'MedicationAdministration',
  instantiates: 'string mock',
  partOf: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  status: 'in-progress',
  statusReason: [codeableConceptMock],
  category: codeableConceptMock,
  medicationCodeableConcept: codeableConceptMock,
  medicationReference: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  subject: patientMock,
  context: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  effectiveDateTime: new Date('2020-01-01'),
  effectivePeriod: periodMock,
  performer: [
    {
      function: codeableConceptMock,
      actor: practitionerMock,
    },
  ],
  reasonCode: [codeableConceptMock],
  reasonReference: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  request: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  device: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  note: [annotationMock],
  dosage: [
    {
      text: 'string mock',
      bodySite: codeableConceptMock,
      route: codeableConceptMock,
      method: codeableConceptMock,
      dose: 'string mock',
      rate: {
        value: 1,
        unitType: codeableConceptMock,
        unit: codeableConceptMock,
      },
    },
  ],
  eventHistory: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  practitioner: practitionerMock,
  duration: {
    value: 1,
    unit: codeableConceptMock,
  },
  recordedDate: new Date('2020-01-01'),
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
