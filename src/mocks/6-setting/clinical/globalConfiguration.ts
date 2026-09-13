import { Types } from 'mongoose';

export const globalConfigurationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  demographicDataRequired: true,
};
