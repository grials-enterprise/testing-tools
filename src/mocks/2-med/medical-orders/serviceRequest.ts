import { Types } from 'mongoose';
import { patientMock } from '../../1-core/patient';
import { annotationMock } from '../../1-core/annotation';
import { practitionerMock } from '../../1-core/practitioner';
import { auditUserMock, codeableConceptMock } from '../../0-base';

export const serviceRequestMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  encounter: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  patient: patientMock,
  recordedDate: new Date('2020-01-01'),
  occurrenceDate: new Date('2020-01-01'),
  basedOn: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  category: codeableConceptMock,
  orderDetail: 'string mock',
  priority: 'routine',
  code: codeableConceptMock,
  requester: practitionerMock,
  performer: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  locationCode: [codeableConceptMock],
  reasonCode: [codeableConceptMock],
  bodySite: [codeableConceptMock],
  note: [annotationMock],
  status: codeableConceptMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
