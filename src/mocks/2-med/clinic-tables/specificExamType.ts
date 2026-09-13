import { Types } from 'mongoose';
import { codingMock, codeableConceptMock } from '../../0-base';

export const specificExamTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  code: [codingMock],
  bodyRegion: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  specialty: codeableConceptMock,
  finding: 'string mock',
  active: true,
  licenseKey: 'string mock',
};
