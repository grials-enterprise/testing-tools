import { auditUserMock, priorityTypeMock } from '../0-base';
import { patientMock } from '../1-core/patient';
import { procedureTypeMock } from '../1-core/procedureType';
import { organizationalChartMock } from '../1-core/organizationalChart';
import { Types } from 'mongoose';

export const receptionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  scheduleProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  patient: patientMock,
  procedureType: procedureTypeMock,
  comments: 'string mock',
  receptionTime: new Date(),
  active: true,
  status: [
    {
      organizationalChart: organizationalChartMock,
      date: new Date(),
      label: 'standby',
    },
  ],
  canceled: false,
  reasonCanceled: 'string mock',
  priority: priorityTypeMock,
  lastStatus: 'string mock',
  licenseKey: 'string mock',
  _user: auditUserMock,
};
