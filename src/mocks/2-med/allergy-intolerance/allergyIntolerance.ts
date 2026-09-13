import { Types } from 'mongoose';
import { rangeMock, periodMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { annotationMock, patientMock, practitionerMock } from '../../1-core';
import { encounterMock } from '../episode-of-care';

export const allergyIntoleranceMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'AllergyIntolerance',
  clinicalStatus: codeableConceptMock,
  verificationStatus: codeableConceptMock,
  allergyIntoleranceType: 'allergy',
  category: ['food'],
  criticality: 'high',
  code: codeableConceptMock,
  patient: patientMock,
  encounter: encounterMock,
  onsetDateTime: new Date('2020-01-01'),
  onsetAge: 30,
  onsetPeriod: periodMock,
  onsetRange: rangeMock,
  onsetString: 'string mock',
  recordedDate: new Date('2020-01-01'),
  recorder: practitionerMock,
  asserter: practitionerMock,
  lastOccurrence: new Date('2020-01-01'),
  note: [annotationMock],
  reaction: [
    {
      substance: codeableConceptMock,
      manifestation: [codeableConceptMock],
      description: 'string mock',
      onset: new Date('2020-01-01'),
      severity: 'severe',
      exposureRoute: codeableConceptMock,
      note: [annotationMock],
    },
  ],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
