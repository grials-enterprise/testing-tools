import { Types } from 'mongoose';
import {
  contactPointMock,
  identifierMock,
  codeableConceptMock,
  periodMock,
  auditUserMock,
  codingMock,
} from '../0-base';

export const endpointMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  address: 'string mock',
  connectionType: codingMock,
  contact: contactPointMock,
  identifier: [identifierMock],
  header: 'string mock',
  name: 'string mock',
  payloadType: codeableConceptMock,
  period: periodMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
