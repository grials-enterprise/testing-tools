import { Types } from 'mongoose';
import {
  moneyMock,
  periodMock,
  addressMock,
  humanNameMock,
  auditUserMock,
  identifierMock,
  attachmentMock,
  contactPointMock,
  codeableConceptMock,
} from '../0-base';

export const coverageCasesMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  case: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  familyRelationship: codeableConceptMock,
  plan: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  relationship: codeableConceptMock,
  name: humanNameMock,
  identifier: [identifierMock],
  telecom: [contactPointMock],
  address: addressMock,
  gender: codeableConceptMock,
  organization: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  period: periodMock,
  coverage: {
    reviewDate: new Date('2020-01-01'),
    period: periodMock,
    media: [attachmentMock],
    amount: moneyMock,
  },
  holderEmail: 'string mock',
  policyCertificate: 123456,
  documentType: 'string mock',
  document: 'string mock',
  documentActivation: 'string mock',
  operator: 'string mock',
  authorizedAmount: 1000,
  insuranceCode: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
