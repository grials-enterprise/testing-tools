import { Types } from 'mongoose';
import { practitionerMock } from '../1-core';
import { patientMock } from '../1-core/patient';
import { scheduleProfileMock } from './scheduleProfile';
import { procedureTypeMock } from '../1-core/procedureType';
import { auditUserMock, codeableConceptMock } from '../0-base';
import { customerOrganizationMock } from '../1-core/customerOrganization';

export const practitionerMedicalBoardMock = {
  status: 'ON-HOLD',
  consultationType: 'FACE-TO-FACE',
  medicalBoardRole: 'president',
  ...practitionerMock,
};

export const appointmentMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  identifier: [],
  eventType: 'APPOINTMENT',
  scheduleProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  patient: patientMock,
  date: new Date('2020-01-01'),
  startTime: 9,
  endTime: 10,
  procedureType: procedureTypeMock,
  user: 'string mock',
  notificationWay: codeableConceptMock,
  consultationType: codeableConceptMock,
  status: {
    statusType: codeableConceptMock,
    confirmationMethod: 'presence',
    reasonSuspended: 'string mock',
    user: 'string mock',
    date: new Date(),
  },
  active: true,
  overshift: false,
  licenseKey: 'string mock',
  supplier: customerOrganizationMock,
  attenderType: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  host: {
    ...scheduleProfileMock,
    consultationType: 'string mock',
    status: 'string mock',
  },
  details: {
    title: 'string mock',
    description: 'string mock',
  },
  medicalBoard: {
    participants: [
      {
        participant: practitionerMedicalBoardMock, // Mock data for SchemaTypes.Mixed
        assistance: 'ON-HOLD',
      },
    ],
    patients: [
      {
        position: 1,
        patient: patientMock,
        preparationStatus: 'PENDING',
      },
    ],
  },
  externalId: 'string mock',
  externalIdTwo: 'string mock',
  physicalLocation: 'string mock',
  virtualLocation: 'www.google.com',
  _user: auditUserMock,
};
