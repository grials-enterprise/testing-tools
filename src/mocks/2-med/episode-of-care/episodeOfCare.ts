import { Types } from 'mongoose';
import { periodMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { accountMock, patientMock, practitionerMock, organizationalChartMock } from '../../1-core';
import { serviceRequestMock } from '../medical-orders';
import { conditionMock } from '../observations';

export const episodeOfCareMock: any = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'EpisodeOfCare',
  status: 'planned',
  statusHistory: [
    {
      status: 'planned',
      period: periodMock,
    },
  ],
  episodeOfCareType: [codeableConceptMock],
  diagnosis: [
    {
      condition: conditionMock,
      role: codeableConceptMock,
      rank: 1,
    },
  ],
  patient: patientMock,
  managingOrganization: organizationalChartMock,
  period: periodMock,
  referralRequest: [serviceRequestMock],
  careManager: practitionerMock,
  team: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  account: [accountMock],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
