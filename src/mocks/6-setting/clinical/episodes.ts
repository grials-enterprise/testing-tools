import { Types } from 'mongoose';

export const episodesSettingMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  episodeInformation: true,
  background: true,
  symptoms: true,
  functionalExam: true,
  generalExamen: true,
  specificExam: true,
  complementaryExplorations: true,
  diagnosis: true,
  plan: true,
  treatment: true,
  evolution: true,
  allergiesAndIntolerances: true,
  personal: true,
  familiar: true,
  habits: true,
  gynecology: true,
  immunizations: true,
};
