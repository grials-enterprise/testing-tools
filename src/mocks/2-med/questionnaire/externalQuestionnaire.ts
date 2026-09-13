import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';
import { notificationMock, patientMock, practitionerMock } from '../../1-core';
import { questionnaireTypeMock } from './questionnaireType';

export const externalQuestionnaireMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  date: new Date().toISOString(),
  token: 'string mock',
  tokenKey: 'string mock',
  verifiedSignature: 'string mock',
  questionnaireType: questionnaireTypeMock,
  patient: patientMock,
  publisher: practitionerMock,
  notification: notificationMock,
  completed: true,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
