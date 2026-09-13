import { Types } from 'mongoose';
import { rangeMock, periodMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { practitionerMock } from '../../1-core/practitioner';
import { patientMock } from '../../1-core/patient';
import { annotationMock } from '../../1-core/annotation';
import { diagnosticTypeMock } from '../clinic-tables/diagnosticType';
import { episodeMock } from '../episodes';
import { observationMock } from './observation';

export const conditionMock: any = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  identifier: [],
  resourceType: 'Condition',
  date: new Date('2020-01-01'),
  diagnosisType: codeableConceptMock,
  clinicalStatus: codeableConceptMock,
  verificationStatus: diagnosticTypeMock,
  category: [codeableConceptMock],
  severity: codeableConceptMock,
  code: codeableConceptMock,
  bodySite: [codeableConceptMock],
  subject: patientMock,
  encounter: episodeMock,
  onsetDateTime: new Date('2020-01-01'),
  onsetAge: 30,
  onsetPeriod: periodMock,
  onsetRange: rangeMock,
  onsetString: 'string mock',
  abatementDateTime: new Date('2020-01-01'),
  abatementAge: 30,
  abatementPeriod: periodMock,
  abatementRange: rangeMock,
  abatementString: 'string mock',
  recordedDate: new Date('2020-01-01'),
  recorder: practitionerMock,
  asserter: practitionerMock, // Mock data for SchemaTypes.Mixed
  participant: [
    {
      function: codeableConceptMock,
      actor: practitionerMock, // Mock data for SchemaTypes.Mixed
    },
  ],
  stage: [
    {
      summary: codeableConceptMock,
      assessment: [observationMock],
      types: codeableConceptMock,
    },
  ],
  evidence: [
    {
      code: [codeableConceptMock],
      detail: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    },
  ],
  note: [annotationMock],
  practitioner: practitionerMock,
  active: true,
  main: false,
  licenseKey: 'string mock',
  eventPartOf: {
    event: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    eventType: 'string mock',
  },
  _user: auditUserMock,
};
