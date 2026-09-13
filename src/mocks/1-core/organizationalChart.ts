import { Types } from 'mongoose';
import {
  periodMock,
  addressMock,
  auditUserMock,
  attachmentMock,
  contactPointMock,
  identifierMock,
  codeableConceptMock,
} from '../0-base';

export const organizationalChartMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'string mock',
  administrable: true,
  dependency: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  user: 'string mock',
  email: 'string mock',
  telecom: [contactPointMock],
  address: [addressMock],
  identifier: [identifierMock],
  geoReference: 'string mock',
  geoZone: 'string mock',
  attributes: [codeableConceptMock],
  adminAttributes: [codeableConceptMock],
  logo: attachmentMock,
  seal: attachmentMock,
  signing: attachmentMock,
  licenseKey: 'string mock',
  code: 'string mock',
  active: true,
  goals: [
    {
      goal: 100,
      period: periodMock,
      name: 'string mock',
    },
  ],
  _user: auditUserMock,
};
