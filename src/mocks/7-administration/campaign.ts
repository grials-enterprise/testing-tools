import { Types } from 'mongoose';
import { auditUserMock, attachmentMock } from '../0-base';
import { carePlanTypeMock } from '../2-med';
import { notificationMock } from '../1-core';

const campaignFormControlMock = {
  enabled: false,
  required: false,
};

const campaignFormMock = {
  sex: campaignFormControlMock,
  city: campaignFormControlMock,
  state: campaignFormControlMock,
  email: campaignFormControlMock,
  mobile: campaignFormControlMock,
  country: campaignFormControlMock,
  insuranceCompany: campaignFormControlMock,
};

export const campaignMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  information: [
    {
      logo: 'string mock',
      link: 'string mock',
      message: 'string mock',
    },
  ],
  forms: campaignFormMock,
  inclusionCriteria: [
    {
      model: 'PatientCampaign',
      condition: 'string mock',
    },
  ],
  logo: attachmentMock,
  title: 'string mock',
  description: 'string mock',
  termsAndConditions: 'string mock',
  acceptedConditionsMessage: 'string mock',
  urlPath: 'string mock',
  carePlanType: carePlanTypeMock,
  licenseKey: 'string mock',
  active: true,
  notifications: {
    rejectInclusionCriteria: notificationMock,
  },
  messages: {
    alreadyParticipated: 'string mock',
  },
  _user: auditUserMock,
};
