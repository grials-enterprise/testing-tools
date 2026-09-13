import { Types } from 'mongoose';
import { auditUserMock, periodMock } from '../../0-base';

export const paraclinicalReportMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  paraclinicalExamId: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  bodyRegion: 'string mock',
  category: 'string mock',
  conclusion: 'string mock',
  diagnostics: ['string mock'],
  effectiveDateTime: 'string mock',
  findings: 'string mock',
  functionalStudyResult: ['string mock'],
  functionalStudyVariablesAndAnswers: ['string mock'],
  laterality: 'string mock',
  studyNumber: 'string mock',
  period: periodMock,
  practitioner: 'string mock',
  provider: 'string mock',
  interpreterResults: 'string mock',
  performer: 'string mock',
  study: 'string mock',
  specimen: 'string mock',
  issued: 'string mock',
  accessIdentifier: 'string mock',
  macroscopic: 'string mock',
  microscopic: 'string mock',
  studyType: 'string mock',
  variables: [
    {
      name: 'string mock',
      range: 'string mock',
      result: 'string mock',
      unit: 'string mock',
    },
  ],
  _user: auditUserMock,
};
