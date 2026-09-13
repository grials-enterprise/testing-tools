import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const evolutionReportMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  evolutionId: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  observation: 'string mock',
  generalPhysicalExam: {
    description: 'string mock',
    vitalSign: 'string mock',
    bodyMeasure: 'string mock',
  },
  plan: 'string mock',
  functionalExam: ['string mock'],
  specificPhysicalExam: ['string mock'],
  complementaryExploration: ['string mock'],
  questionnaires: ['string mock'],
  diagnosis: ['string mock'],
  treatment: ['string mock'],
  carePlan: ['string mock'],
  treatmentData: {
    evolutionTreatment: ['string mock'],
    medicalTreatment: ['string mock'],
    procedureTreatment: ['string mock'],
  },
  indications: 'string mock',
  clinicalProcedures: 'string mock',
  surgicalProcedures: 'string mock',
  examOrders: 'string mock',
  activities: 'string mock',
  carePlanDescription: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
