import { Types } from 'mongoose';
import { patientMock } from '../1-core/patient';

export const patientCampaignMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  licenseKey: 'string mock',
  patient: patientMock,
  active: true,
  date: new Date(),
  enabled: true,
  acceptedConditions: true,
  acceptedConfidentialPolicies: true,
  campaignId: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
};
