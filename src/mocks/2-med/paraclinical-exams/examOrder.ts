import { Types } from 'mongoose';
import { specimenMock } from '../specimen';
import { patientMock } from '../../1-core/patient';
import { bodyRegionMock } from '../../1-core/bodyRegion';
import { specimenTypeMock } from '../../1-core/specimenType';
import { practitionerMock } from '../../1-core/practitioner';
import { customerOrganizationMock } from '../../1-core/customerOrganization';
import { auditUserMock, priorityTypeMock, codeableConceptMock } from '../../0-base';

export const examOrderMock: any = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  identifier: [],
  date: new Date('2020-01-01'),
  programmingDate: new Date('2020-01-01'),
  orderNumber: 'string mock',
  practitioner: practitionerMock,
  category: 'LAB',
  examType: codeableConceptMock,
  sample: specimenMock,
  bodyRegion: bodyRegionMock,
  priority: priorityTypeMock,
  institution: customerOrganizationMock,
  practitionerRefered: practitionerMock,
  comment: 'string mock',
  patient: patientMock,
  laterality: 'left',
  pdfGenerated: false,
  episode: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  publishedResult: false,
  active: true,
  licenseKey: 'string mock',
  reissue: false,
  reissueReason: codeableConceptMock,
  specimenType: specimenTypeMock,
  _user: auditUserMock,
};
