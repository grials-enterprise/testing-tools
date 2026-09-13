import { Types } from 'mongoose';
import { rangeMock, ratioMock, quantityMock, auditUserMock, codeableConceptMock } from '../../0-base';

export const dosageMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  sequence: 1,
  text: 'string mock',
  additionalInstruction: [codeableConceptMock],
  patientInstruction: 'string mock',
  timing: 'string mock',
  asNeeded: true,
  site: codeableConceptMock,
  route: codeableConceptMock,
  method: codeableConceptMock,
  doseAndRate: {
    types: codeableConceptMock,
    dose: {
      doseRange: rangeMock,
      doseQuantity: quantityMock,
    },
    rate: {
      rateRatio: ratioMock,
      rateRange: rangeMock,
      rateQuantity: 'string mock',
    },
  },
  maxDosePerPeriod: ratioMock,
  maxDosePerAdministration: 'string mock',
  maxDosePerLifetime: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
