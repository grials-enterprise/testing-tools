import { Types } from 'mongoose';

export const encounterSettingMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  encounterInformation: true,
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
};
