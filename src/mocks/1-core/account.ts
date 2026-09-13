import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock, periodMock } from '../0-base';
import { coverageCasesMock } from './coverages';
import { organizationalChartMock } from './organizationalChart';
import { patientMock } from './patient';

export const accountMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Account',
  status: codeableConceptMock,
  accountType: codeableConceptMock,
  name: 'string mock',
  subject: [patientMock],
  servicePeriod: periodMock,
  coverage: {
    coverage: coverageCasesMock, // Mock data for SchemaTypes.Mixed
    priority: 1,
  },
  owner: organizationalChartMock,
  description: 'string mock',
  guarantor: [
    {
      party: { key: 'value' }, // Mock data for SchemaTypes.Mixed
      onHold: true,
      period: periodMock,
    },
  ],
  partOf: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
