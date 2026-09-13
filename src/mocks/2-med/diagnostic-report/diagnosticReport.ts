import { mediaMock } from '../media';
import { specimenMock } from '../specimen';
import { imagingStudyMock } from './ImagingStudy';
import { episodeMock } from '../episodes/episode';
import { serviceRequestMock } from '../medical-orders';
import { laboratoryVariableMock } from '../clinic-tables';
import { conditionMock, observationMock } from '../observations';
import { patientMock, practitionerMock, customerOrganizationMock } from '../../1-core';
import { codingMock, periodMock, auditUserMock, attachmentMock, identifierMock } from '../../0-base';
import { Types } from 'mongoose';

export const diagnosticReportMock: any = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  externalCode: 'string mock',
  resourceType: 'DiagnosticReport',
  identifier: [identifierMock],
  basedOn: [serviceRequestMock],
  status: codingMock,
  category: 'laboratory',
  code: {
    value: laboratoryVariableMock,
    coding: [codingMock],
    text: 'string mock',
  },
  subject: patientMock,
  encounter: episodeMock,
  effectiveDateTime: new Date('2020-01-01'),
  effectivePeriod: periodMock,
  issued: new Date('2020-01-01'),
  performer: [practitionerMock],
  resultsInterpreter: [practitionerMock],
  specimen: [specimenMock],
  result: [observationMock],
  imagingStudy: [imagingStudyMock],
  media: [
    {
      comment: 'string mock',
      link: mediaMock,
    },
  ],
  conclusion: 'string mock',
  conclusionCode: [conditionMock],
  presentedForm: [attachmentMock],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  provider: customerOrganizationMock,
  _user: auditUserMock,
};
