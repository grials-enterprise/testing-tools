import { Types } from 'mongoose';
import {
  addressMock,
  humanNameMock,
  auditUserMock,
  identifierMock,
  contactPointMock,
  codeableConceptMock,
} from '../0-base';
import { endpointMock } from './endpoint';

export const organizationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  resourceType: 'Organization',
  identifier: [identifierMock],
  active: false,
  organizationType: codeableConceptMock,
  name: 'string mock',
  alias: 'string mock',
  telecom: contactPointMock,
  address: [addressMock],
  partOf: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  contact: [
    {
      purpose: codeableConceptMock,
      name: humanNameMock,
      telecom: [contactPointMock],
      address: addressMock,
    },
  ],
  endpoint: [endpointMock],
  licenseKey: 'string mock',
  __v: 0,
  _user: auditUserMock,
};
