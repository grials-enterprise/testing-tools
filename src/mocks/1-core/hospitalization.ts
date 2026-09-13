import { auditUserMock, codeableConceptMock } from '../0-base';
import { placeMock } from './place';
import { procedureTypeMock } from './procedureType';
import { organizationalChartMock } from './organizationalChart';
import { Types } from 'mongoose';

export const hospitalizationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  admitDate: new Date('2020-01-01'),
  recordedDate: new Date('2020-01-01'),
  reAdmission: true,
  origin: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  destination: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  place: placeMock,
  _user: auditUserMock,
  procedureType: procedureTypeMock,
  admitUnit: organizationalChartMock,
  receivingUnit: organizationalChartMock,
  admitSource: codeableConceptMock,
  urgencyLevel: codeableConceptMock,
  dietPreference: [codeableConceptMock],
  specialCourtesy: [codeableConceptMock],
  specialArrangement: [codeableConceptMock],
  dischargeDisposition: codeableConceptMock,
  admissionDisposition: codeableConceptMock,
  active: true,
  licenseKey: 'string mock',
};
