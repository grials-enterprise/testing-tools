import { Types } from 'mongoose';
import {
  addressMock,
  auditUserMock,
  humanNameMock,
  attachmentMock,
  identifierMock,
  contactPointMock,
  codeableConceptMock,
} from '../0-base';
import { taxMock } from './tax';
import { codeMock } from './code';
import { warehouseMock } from './warehouse';
import { organizationalChartMock } from './organizationalChart';

export const practitionerMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  idx: ['string mock'],
  resourceType: 'Practitioner',
  identifier: [identifierMock],
  active: true,
  name: [humanNameMock],
  photo: attachmentMock,
  specialty: [codeableConceptMock],
  telecom: [contactPointMock],
  address: [addressMock],
  geoReference: 'string mock',
  geoZone: 'string mock',
  gender: codeableConceptMock,
  birthDate: new Date('1990-01-01'),
  licenseKey: 'string mock',
  qualification: [
    {
      identifier: [identifierMock],
      code: codeableConceptMock,
      period: { start: new Date('2020-01-01'), end: new Date('2020-12-31') },
      issuer: 'string mock',
    },
  ],
  communication: [codeableConceptMock],
  code: 'string mock',
  joinDate: new Date(),
  notes: 'string mock',
  organization: organizationalChartMock,
  user: 'string mock',
  administrativeProfile: {
    isShareholder: false,
    withholding: [
      {
        withholdingType: 'string mock',
        percentage: 10,
      },
    ],
    taxpayerType: 'string mock',
    taxWithholding: [
      {
        taxWithholdingType: 'string mock',
        percentage: 10,
      },
    ],
    bankAccount: {
      accountNumber: 123456789,
      accountType: 'string mock',
      accountBank: 'string mock',
    },
    association: {
      associationWith: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
      associationType: 'string mock',
      associationDetail: 'string mock',
    },
  },
  bankData: {
    accountNumber: 'string mock',
    accountType: 'string mock',
    bank: 'string mock',
    bankAccount: 'string mock',
    currency: codeableConceptMock,
    personType: 'string mock',
    taxes: [taxMock],
  },
  adminOrganization: [organizationalChartMock],
  warehouses: [warehouseMock],
  feePayment: [
    {
      concept: codeMock,
      comments: 'string mock',
      isInvoice: false,
      isCut: false,
      taxes: [taxMock],
      costType: 'string mock',
      amount: 100,
      permanentAmount: 100,
      percentageAmount: 10,
    },
  ],
  _user: auditUserMock,
};
