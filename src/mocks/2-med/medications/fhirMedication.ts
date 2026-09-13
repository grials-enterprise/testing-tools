import { Types } from 'mongoose';
import { codeableConceptMock, auditUserMock, ratioMock } from '../../0-base';

export const fhirMedicationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: codeableConceptMock,
  status: 'active',
  manufacturer: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  form: codeableConceptMock,
  amount: ratioMock,
  ingredient: [
    {
      itemCodeableConcept: codeableConceptMock,
      itemReference: { key: 'value' }, // Mock data for SchemaTypes.Mixed
      isActive: true,
      strength: ratioMock,
    },
  ],
  batch: {
    lotNumber: 'string mock',
    expirationDate: new Date('2022-01-01'),
  },
  dosePerKg: 1.0,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
