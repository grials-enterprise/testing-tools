import { Types } from 'mongoose';
import { auditUserMock } from '../0-base/auditUser';

export const userMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  username: 'string mock',
  email: 'string mock',
  password: 'string mock',
  firstLogin: true,
  permits: [
    {
      name: 'string mock',
      features: [
        {
          _id: new Types.ObjectId().toString(),
          name: 'string mock',
          value: 1,
          level: 1,
        },
      ],
      generalValue: 1,
      _id: new Types.ObjectId().toString(),
    },
  ],
  onboarding: false,
  type: 'Superuser',
  __t: 'string mock',
  agendaOrganizations: [new Types.ObjectId().toString()], // Mock data for SchemaTypes.ObjectId
  _user: auditUserMock,
  licenseKey: 'string mock',
  active: true,
};
