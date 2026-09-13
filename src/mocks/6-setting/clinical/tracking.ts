import { Types } from 'mongoose';

export const trackingMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  vitalSigns: true,
  drugs: true,
  mechanicVentilation: true,
  calculator: true,
  hydricBalance: true,
  bodyMeasurement: true,
  orders: true,
  kardex: true,
  questionnaire: true,
};
