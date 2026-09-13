import { Types } from 'mongoose';
import { procedureTypeMock } from './procedureType';
import { auditUserMock, addressMock, contactPointMock, codeableConceptMock } from '../0-base';

export const locationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  managingOrganization: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  partOf: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  status: 'active',
  operationalStatus: codeableConceptMock,
  identifier: [],
  name: 'string mock',
  code: 'ABCDE',
  alias: ['string mock'],
  mode: 'instance',
  locationType: codeableConceptMock,
  address: addressMock,
  telecom: contactPointMock,
  physicalType: codeableConceptMock,
  position: {
    longitude: 123.45,
    latitude: 67.89,
    altitude: 10.0,
  },
  description: 'string mock',
  hoursOfOperation: [
    {
      _id: 'string mock',
      dayOfWeek: 'monday',
      allDay: false,
      openingTime: 9,
      closingTime: 17,
    },
  ],
  availabilityExceptions: 'string mock',
  procedureCategory: 'clinical',
  procedureType: [procedureTypeMock],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
