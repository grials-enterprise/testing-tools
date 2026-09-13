import { Types } from 'mongoose';
import { diagramMock } from './diagram';
import { auditUserMock } from '../../../0-base';
import { practitionerMock } from '../../../1-core/practitioner';

export const evolutionSpecificPhysicalExamMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  evolution: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  practitioner: practitionerMock,
  region: 'string mock',
  finding: 'string mock',
  comment: 'string mock',
  diagram: diagramMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
