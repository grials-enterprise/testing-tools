import { Types } from 'mongoose';
import { auditUserMock, attachmentMock, codeableConceptMock } from '../0-base';
import { practitionerMock } from '../1-core/practitioner';

export const practitionerUserMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  logo: attachmentMock,
  medicalSpecialties: [codeableConceptMock],
  practitionerProfile: practitionerMock,
  _user: auditUserMock,

  username: 'string mock',
  email: 'string mock',
  password: 'string mock',
  firstLogin: true,
  permits: [],
  onboarding: false,
  agendaOrganizations: [],
  type: 'Practitioner',
  __t: 'string mock',
  active: true,
  licenseKey: 'string mock',
};
