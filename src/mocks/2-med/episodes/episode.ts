import { Types } from 'mongoose';
import { periodMock, auditUserMock, vitalSignMock, codeableConceptMock } from '../../0-base';
import { patientMock, locationMock, practitionerMock, hospitalizationMock } from '../../1-core';
import { bodyMeasureMock } from './components';

export const episodeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  identifier: [],
  patient: patientMock,
  date: new Date('2020-01-01'),
  endDate: new Date('2020-01-10'),
  reasonConsultation: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  specialty: codeableConceptMock,
  practitioner: practitionerMock,
  status: 'in-progress',
  currentDisease: 'string mock',
  generalPhysicalExam: {
    date: new Date('2020-01-01'),
    practitioner: practitionerMock,
    description: 'string mock',
    vitalSign: vitalSignMock,
    bodyMeasure: bodyMeasureMock,
    evolution: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  },
  plan: 'string mock',
  hospitalization: hospitalizationMock,
  location: [
    {
      status: 'active',
      event: 'admission',
      locationPlace: locationMock,
      physicalType: codeableConceptMock,
      period: periodMock,
      comments: 'string mock',
    },
  ],
  reception: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  reportGenerated: false,
  active: true,
  licenseKey: 'string mock',
  externalId: 'string mock',
  _user: auditUserMock,
};
