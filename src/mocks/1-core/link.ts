import { Types } from 'mongoose';
import {
  addressMock,
  humanNameMock,
  auditUserMock,
  identifierMock,
  contactPointMock,
  codeableConceptMock,
} from '../0-base';

export const patientLinkMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: [humanNameMock],
  address: [addressMock],
  telecom: [contactPointMock],
  identifier: [identifierMock],
  birthDate: new Date('1990-01-01'),
  deceasedDateTime: new Date('2020-01-01'),
  deceasedBoolean: false,
  gender: codeableConceptMock,
};

export const linkMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  date: new Date('2020-01-01'),
  patient: patientLinkMock,
  other: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  linkType: 'replaced-by',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
