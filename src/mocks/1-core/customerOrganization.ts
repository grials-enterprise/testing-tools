import { codeableConceptMock, auditUserMock } from '../0-base';
import { bankMock } from './bank';
import { bankAccountMock } from './bankAccount';
import { organizationalChartMock } from './organizationalChart';
import { identifierMock } from '../0-base/identifier';
import { humanNameMock } from '../0-base/humanName';
import { addressMock } from '../0-base/address';
import { contactPointMock } from '../0-base/contactPoint';
import { Types } from 'mongoose';

export const customerOrganizationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  idx: ['string mock'],
  resourceType: 'CustomerOrganization',
  name: 'string mock',
  identifier: [identifierMock],
  contact: [
    {
      name: [humanNameMock],
      position: 'string mock',
    },
  ],
  address: [addressMock],
  geoReference: 'string mock',
  geoZone: 'string mock',
  contactInformation: [contactPointMock],
  commercialActivity: ['string mock'],
  personType: codeableConceptMock,
  licenseKey: 'string mock',
  user: 'string mock',
  active: false,
  organizationType: codeableConceptMock,
  organizationActivity: codeableConceptMock,
  component: organizationalChartMock,
  bankData: {
    bank: bankMock,
    bankAccount: bankAccountMock,
  },
  _user: auditUserMock,
};
