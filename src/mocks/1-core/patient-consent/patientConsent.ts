import { Types } from 'mongoose';
import { attachmentMock, auditUserMock, humanNameMock, identifierMock } from '../../0-base';
import { patientMock } from '../patient';
import { practitionerUserMock } from '../../4-security';
import { practitionerMock } from '../practitioner';
import { contactMock } from '../contact';

export const patientConsentMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  dateTime: new Date('2020-01-01'),
  user: practitionerUserMock,
  patient: patientMock,
  title: 'string mock',
  consent: 'string mock',
  performer: [
    {
      isMain: true,
      role: 'string mock',
      signature: 'string mock',
      practitioner: practitionerMock,
      contact: contactMock,
      witness: {
        name: humanNameMock,
        identifier: identifierMock,
      },
    },
  ],
  active: true,
  licenseKey: 'string mock',
  images: [attachmentMock],
  signatures: [attachmentMock],
  _user: auditUserMock,
};
