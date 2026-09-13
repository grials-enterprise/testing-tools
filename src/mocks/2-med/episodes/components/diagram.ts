import { auditUserMock } from '../../../0-base';
import { practitionerMock } from '../../../1-core/practitioner';
import { Types } from 'mongoose';

export const diagramMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  url: 'string mock',
  date: new Date('2020-01-01'),
  active: true,
  practitioner: practitionerMock,
  locations: [
    {
      notes: 'string mock',
      zone: 'string mock',
      finding: 'string mock',
      coordinates: {
        x: 1,
        y: 2,
        z: 3,
      },
    },
  ],
  licenseKey: 'string mock',
  _user: auditUserMock,
};
