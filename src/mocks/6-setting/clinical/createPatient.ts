import { Types } from 'mongoose';

export const createPatientMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  complexPatient: false,
  personalInformation: false,
  representativeData: true,
  laboralData: true,
  parentsData: false,
  emergencyContactData: false,
};
