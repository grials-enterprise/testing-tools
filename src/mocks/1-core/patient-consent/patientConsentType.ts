import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../../0-base';
import { practitionerUserMock } from '../../4-security';

export const patientConsentTypeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  title: 'string mock',
  text: 'string mock',
  user: practitionerUserMock,
  scope: codeableConceptMock,
  signature: [
    {
      role: 'string mock',
      signature: 'string mock',
    },
  ],
  requiredSignatures: false,
  requiredImages: false,
  images: ['string mock'],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
