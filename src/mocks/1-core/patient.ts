import {
  auditUserMock,
  addressMock,
  humanNameMock,
  attachmentMock,
  disabilityMock,
  contactPointMock,
  communicationMock,
  identifierMock,
  codeableConceptMock,
  insuranceCompanyMock,
} from '../0-base';
import { linkMock } from './link';
import { extensionMock } from './extension';
import { practitionerMock } from './practitioner';
import { organizationMock } from './organization';
import { contactMock } from './contact';
import { customerOrganizationMock } from './customerOrganization';
import { Types } from 'mongoose';

export const patientMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  idx: ['string mock'],
  contact: [contactMock],
  generalPractitioner: [practitionerMock],
  name: [humanNameMock],
  address: [addressMock],
  photo: [attachmentMock],
  extension: [extensionMock],
  telecom: [contactPointMock],
  disabilities: [disabilityMock],
  identifier: [identifierMock],
  communication: [communicationMock],
  insuranceCompanies: [insuranceCompanyMock],
  user: 'string mock',
  notes: 'string mock',
  geoZone: 'string mock',
  birthDate: new Date('1990-01-01'),
  referedBy: 'string mock',
  licenseKey: 'string mock',
  geoReference: 'string mock',
  deceasedDateTime: new Date('2020-01-01'),
  active: false,
  link: [linkMock],
  deceasedBoolean: false,
  multipleBirthInteger: 0,
  gender: codeableConceptMock,
  multipleBirthBoolean: false,
  handedness: codeableConceptMock,
  profession: codeableConceptMock,
  nationality: codeableConceptMock,
  birthCountry: codeableConceptMock,
  maritalStatus: codeableConceptMock,
  deceasedCountry: codeableConceptMock,
  residenceCountry: codeableConceptMock,
  managingOrganization: organizationMock,
  resourceType: 'Patient',
  labor: {
    identifier: identifierMock,
    name: 'string mock',
    department: 'string mock',
    cargo: 'string mock',
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
    contact: [contactMock],
  },
  payer: {
    payerType: codeableConceptMock,
    customerOrganization: customerOrganizationMock,
  },
  admission: {
    status: false,
    encounter: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  },
  _user: auditUserMock,
};
