import { Types } from 'mongoose';
import { patientMock } from '../1-core/patient';
import { procedureTypeMock } from '../1-core/procedureType';
import { customerOrganizationMock } from '../1-core/customerOrganization';
import { auditUserMock, priorityTypeMock, codeableConceptMock } from '../0-base';

export const appointmentRequestMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  scheduleProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  startTime: 9,
  endTime: 10,
  isPatient: true,
  patient: patientMock,
  supplier: customerOrganizationMock,
  procedureType: procedureTypeMock,
  active: false,
  notificationWay: codeableConceptMock,
  consultationType: codeableConceptMock,
  licenseKey: 'string mock',
  status: {
    statusType: codeableConceptMock,
    confirmationMethod: 'presence',
    reasonSuspended: 'string mock',
    user: 'string mock',
    date: new Date(),
    comments: 'string mock',
    cancelationReason: codeableConceptMock,
  },
  requestType: 'string mock',
  requestSource: 'string mock',
  patientCoverageCondition: codeableConceptMock,
  referredBy: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  referringOrganization: 'string mock',
  referralReason: codeableConceptMock,
  referredSpecialty: codeableConceptMock,
  provisionalDiagnosis: codeableConceptMock,
  encounter: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  priority: priorityTypeMock,
  notes: 'string mock',
  user: 'string mock',
  _user: auditUserMock,
};
