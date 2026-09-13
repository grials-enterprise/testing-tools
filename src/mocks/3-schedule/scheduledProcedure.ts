import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../0-base';
import { locationMock } from '../1-core/location';
import { patientMock } from '../1-core/patient';
import { practitionerMock } from '../1-core/practitioner';
import { procedureTypeMock } from '../1-core/procedureType';

export const scheduledProcedureMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  scheduleProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  startTime: 9,
  endTime: 10,
  location: locationMock,
  patient: patientMock,
  practitioners: [
    {
      practitioner: practitionerMock,
      role: codeableConceptMock,
    },
  ],
  procedureType: procedureTypeMock,
  status: {
    statusType: codeableConceptMock,
    confirmationMethod: 'presence',
    reasonSuspended: 'string mock',
    user: 'string mock',
    date: new Date(),
  },
  observations: 'string mock',
  active: true,
  licenseKey: 'string mock',
  overshift: false,
  _user: auditUserMock,
};
