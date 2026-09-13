import { organizationalChartMock } from './organizationalChart';
import { auditUserMock } from '../0-base';
import { Types } from 'mongoose';

export const categoryMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'string mock',
  initials: 'string mock',
  subcategory: [
    {
      name: 'string mock',
      initials: 'string mock',
      billing: false,
      budget: false,
    },
  ],
  billing: false,
  budget: false,
  component: organizationalChartMock,
  active: true,
  licenseKey: 'string mock',
  associatedComponents: [organizationalChartMock],
  _user: auditUserMock,
};
