import { contactPointMock } from '../0-base/contactPoint';
import { humanNameMock } from '../0-base/humanName';
import { identifierMock } from '../0-base/identifier';
import { moneyMock } from '../0-base/money';
import { periodMock } from '../0-base/period';
import { auditUserMock, codeableConceptMock, attachmentMock } from '../0-base';
import { Types } from 'mongoose';

export const contactMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  active: true,
  licenseKey: 'string mock',
  familyRelationship: codeableConceptMock,
  plan: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  relationship: codeableConceptMock,
  name: humanNameMock,
  identifier: [identifierMock],
  telecom: [contactPointMock],
  address: {
    addressType: 'string mock',
    city: 'string mock',
    country: 'string mock',
    district: 'string mock',
    geoReference: 'string mock',
    geoZone: 'string mock',
    postalCode: 'string mock',
    state: 'string mock',
    text: 'string mock',
    use: 'string mock',
  },
  gender: codeableConceptMock,
  organization: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  period: periodMock,
  coverage: {
    reviewDate: new Date('2020-01-01'),
    period: periodMock,
    media: [attachmentMock],
    amount: moneyMock,
  },
  titularEmail: 'string mock',
  policyCertificate: 'string mock',
  _user: auditUserMock,
};
