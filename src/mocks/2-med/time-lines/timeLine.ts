import { auditUserMock } from '../../0-base';
import { diagnosisMock } from '../episodes';
import { patientMock } from '../../1-core/patient';
import { consultationReasonMock } from '../clinic-tables';
import { Types } from 'mongoose';

export const timeLineMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patient: patientMock,
  dateTime: new Date(),
  author: 'string mock',
  event: 'new',
  milestone: 'episode',
  reportAffair: 'string mock',
  episode: {
    _id: 'string mock',
    reasonConsultation: consultationReasonMock,
    currentDisease: 'string mock',
    diagnosis: [diagnosisMock],
  },
  evolution: {
    reasonConsultation: consultationReasonMock,
    observation: 'string mock',
  },
  fileDescription: 'string mock',
  prescriptionMedication: [
    {
      tradeName: 'string mock',
    },
  ],
  url: 'string mock',
  licenseKey: 'string mock',
  _user: auditUserMock,
};
