import { codingMock, auditUserMock, codeableConceptMock } from '../0-base';
import { Types } from 'mongoose';

export const pathologicalSampleTypeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  examType: codeableConceptMock,
  sample: 'string mock',
  active: true,
  code: [codingMock],
  unit: codeableConceptMock,
  minValue: 0,
  maxValue: 100,
  unitType: codeableConceptMock,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
