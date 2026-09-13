import { Types } from 'mongoose';
import { auditUserMock, vitalSignMock } from '../../0-base';
import { practitionerMock } from '../../1-core/practitioner';
import { bodyMeasureMock } from './components/bodyMeasure';

export const evolutionMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  episode: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  practitioner: practitionerMock,
  observation: 'string mock',
  generalPhysicalExam: {
    date: new Date('2020-01-01'),
    practitioner: practitionerMock,
    description: 'string mock',
    evolution: 'string mock',
    vitalSign: vitalSignMock,
    bodyMeasure: bodyMeasureMock,
  },
  plan: 'string mock',
  treatmentSatisfactionLevel: [
    {
      treatment: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
      classification: 'successful',
      comment: 'string mock',
    },
  ],
  reportGenerated: false,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
