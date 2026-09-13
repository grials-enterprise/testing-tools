import { Types } from 'mongoose';
import { patientMock } from '../../1-core';
import { conditionMock } from '../observations';
import { userMock } from '../../4-security/user';
import { questionnaireMock } from '../questionnaire';
import { examOrderMock } from '../paraclinical-exams';
import { boardResolutionMock } from './boardResolution';
import { auditUserMock, attachmentMock } from '../../0-base';
import { practitionerMock } from '../../1-core/practitioner';

export const caseMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  medicalBoardId: 'string mock',
  patientId: 'string mock',
  subject: patientMock, // Mock data for SchemaTypes.Mixed
  caseElements: [
    {
      dataToShow: 'string mock',
      description: 'string mock',
      type: 'synopsis',
    },
  ], // Mock data for SchemaTypes.Mixed
  discussionElements: {
    paraclinicalExamsOrders: [examOrderMock],
    finalConditions: [conditionMock],
    comorbiditiesConditions: [conditionMock],
    carePlan: boardResolutionMock,
    noCarePlanReason: { key: 'value' },
    questionnaires: [questionnaireMock],
    report: attachmentMock,
  },
  conclusion: 'string mock',
  concluded: false,
  aditionalData: 'string mock',
  orderedExams: 'string mock',
  createdCarePlan: 'string mock',
  licenseKey: 'string mock',
  active: true,
  preparer: practitionerMock,
  concluder: practitionerMock,
  proposedBy: practitionerMock,
  preparedAt: new Date('2020-01-01'),
  notes: [
    {
      date: new Date(),
      author: userMock,
      note: 'string mock',
    },
  ],
  _user: auditUserMock,
};
