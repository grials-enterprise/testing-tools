import { Types } from 'mongoose';

export const backgroundMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  allergiesAndIntolerances: true,
  personal: true,
  familiar: true,
  habits: true,
  gynecology: true,
  immunizations: true,
};
