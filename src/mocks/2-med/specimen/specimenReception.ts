import { Types } from 'mongoose';
import { specimenMock } from './specimen';
import { auditUserMock, priorityTypeMock } from '../../0-base';
import { organizationalChartMock, patientMock, practitionerMock } from '../../1-core';

export const specimenReceptionMock: any = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  practitioner: practitionerMock,
  patient: patientMock,
  specimen: specimenMock,
  organizationalChart: organizationalChartMock,
  comments: 'string mock',
  receptionTime: new Date('2020-01-01'),
  status: [
    {
      _id: new Types.ObjectId().toString(),
      organizationalChart: organizationalChartMock,
      date: new Date('2020-01-01'),
      label: 'standby',
    },
  ],
  canceled: false,
  reasonCanceled: 'string mock',
  priority: priorityTypeMock,
  lastStatus: 'string mock',
  licenseKey: 'string mock',
  active: true,
  _user: auditUserMock,
};
