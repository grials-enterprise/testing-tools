import { Types } from 'mongoose';
import { codeableConceptMock, periodMock, auditUserMock } from '.';

export const addressMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  use: 'home',
  type: 'both',
  addressType: 'postal',
  text: 'string mock',
  line: ['string mock'],
  city: 'string mock',
  district: 'string mock',
  state: 'string mock',
  postalCode: 'string mock',
  country: codeableConceptMock,
  period: periodMock,
  geoReference: 'string mock',
  geoZone: 'string mock',
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
