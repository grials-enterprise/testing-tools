import { Types } from 'mongoose';
import { annotationMock, practitionerMock } from '../../1-core';
import { auditUserMock, codeableConceptMock, periodMock } from '../../0-base';

export const taskMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  basedOn: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  encounter: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  requester: practitionerMock,
  performer: practitionerMock,
  focus: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  executionPeriod: periodMock,
  authoredOn: new Date('2020-01-01'),
  status: codeableConceptMock,
  statusReasons: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  priority: 'routine',
  code: codeableConceptMock,
  description: 'string mock',
  note: annotationMock,
  executionHour: 10,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
