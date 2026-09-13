import {
  addressMock,
  auditUserMock,
  codeableConceptMock,
  contactPointMock,
  humanNameMock,
  identifierMock,
} from '../0-base';
import { organizationalChartMock } from './organizationalChart';
import { Types } from 'mongoose';

export const bankMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  bankName: 'string mock',
  personType: codeableConceptMock,
  identificationType: identifierMock,
  swift: 'string mock',
  telecom: [contactPointMock],
  headquartersAddress: addressMock,
  contactData: {
    personName: humanNameMock,
    personPosition: 'string mock',
    address: addressMock,
    telecom: [contactPointMock],
  },
  component: organizationalChartMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
