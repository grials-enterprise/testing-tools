import { auditUserMock } from '../0-base';
import { Types } from 'mongoose';

export const permissionMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'Practitioner',
  modules: [
    {
      name: 'Module 1',
      features: [
        {
          name: 'Feature 1',
          level: [1, 2, 3],
        },
      ],
    },
  ],
  _user: auditUserMock,
};
