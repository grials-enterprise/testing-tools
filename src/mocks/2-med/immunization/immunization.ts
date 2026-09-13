import { auditUserMock, codeableConceptMock } from '../../0-base';
import { annotationMock } from '../../1-core/annotation';
import { practitionerMock } from '../../1-core/practitioner';
import { patientMock } from '../../1-core/patient';
import { immunizationTypeMock } from '../clinic-tables/immunizationType';
import { observationMock } from '../observations/observation';
import { locationMock } from '../../1-core';
import { encounterMock } from '../episode-of-care';
import { Types } from 'mongoose';

export const immunizationMock: any = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Immunization',
  status: 'completed',
  statusReason: codeableConceptMock,
  vaccineCode: immunizationTypeMock,
  patient: patientMock,
  encounter: encounterMock,
  occurrenceDateTime: new Date('2020-01-01'),
  occurrenceString: 'string mock',
  recorded: new Date('2020-01-01'),
  primarySource: true,
  reportOrigin: codeableConceptMock,
  location: locationMock,
  manufacturer: 'string mock', // Mock data for SchemaTypes.Mixed
  lotNumber: 'string mock',
  expirationDate: new Date('2022-01-01'),
  site: codeableConceptMock,
  route: codeableConceptMock,
  doseQuantity: 1.0,
  performer: [
    {
      function: codeableConceptMock,
      actor: practitionerMock,
    },
  ],
  note: [annotationMock],
  reasonCode: codeableConceptMock,
  reasonReference: 'string', // Mock data for SchemaTypes.Mixed
  isSubpotent: false,
  subpotentReason: codeableConceptMock,
  education: [
    {
      documentType: 'string mock',
      reference: 'string mock',
      publicationDate: new Date('2020-01-01'),
      presentationDate: new Date('2020-01-01'),
    },
  ],
  programEligibility: codeableConceptMock,
  fundingSource: codeableConceptMock,
  reaction: [
    {
      date: new Date('2020-01-01'),
      detail: observationMock,
      reported: false,
    },
  ],
  protocolApplied: [
    {
      series: 'string mock',
      targetDisease: [codeableConceptMock],
      doseNumberPositiveInt: 1,
      doseNumberString: 'string mock',
      seriesDosesPositiveInt: 1,
      seriesDosesString: 'string mock',
    },
  ],
  comments: 'string mock',
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
