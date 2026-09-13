import { Types } from 'mongoose';
import { codingMock } from './coding';
import { auditUserMock } from './auditUser';

export const codeableConceptMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  country: 'string mock',
  coding: [codingMock],
  text: 'string mock',
  displays: [
    {
      value: 'string mock',
      language: 'string mock',
      abbreviation: 'string mock',
    },
  ],
  validations: null,
  msgInvalid: null,
  msgSuccess: null,
  group: 'string mock',
  value: 'mixed mock',
  textName: 'string mock',
  acceptedCharacters: 'string mock',
  format: 'string mock',
  label: 'string mock',
  comments: 'string mock',
  active: true,
  _user: auditUserMock,
  licenseKey: 'string mock',
};
