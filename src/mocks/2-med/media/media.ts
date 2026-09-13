import { periodMock, auditUserMock, attachmentMock, identifierMock, codeableConceptMock } from '../../0-base';
import { annotationMock } from '../../1-core/annotation';
import { patientMock } from '../../1-core/patient';
import { practitionerMock } from '../../1-core/practitioner';
import { encounterMock } from '../episode-of-care';
import { serviceRequestMock } from '../medical-orders';
import { Types } from 'mongoose';

export const mediaMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Media',
  identifier: [identifierMock],
  basedOn: [serviceRequestMock],
  partOf: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  status: 'completed',
  mediaType: codeableConceptMock,
  modality: codeableConceptMock,
  view: codeableConceptMock,
  subject: patientMock,
  encounter: encounterMock,
  created: {
    createdDateTime: new Date('2020-01-01'),
    createdPeriod: periodMock,
  },
  issued: new Date('2020-01-01'),
  operator: practitionerMock,
  reasonCode: [codeableConceptMock],
  bodySite: codeableConceptMock,
  deviceName: 'string mock',
  device: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  height: 1080,
  width: 1920,
  frames: 30,
  duration: 120,
  content: attachmentMock,
  note: [annotationMock],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
