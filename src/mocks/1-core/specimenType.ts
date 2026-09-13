import { auditUserMock, codeableConceptMock } from '../0-base';
import { pathologicalSampleTypeMock } from './pathologicalSampleType';
import { Types } from 'mongoose';

export const specimenTypeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  category: codeableConceptMock,
  name: 'string mock',
  sample: pathologicalSampleTypeMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
