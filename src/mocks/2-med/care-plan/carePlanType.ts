import { stageMock } from './stage';
import { medicationMock } from '../medications';
import { questionnaireTypeMock } from '../questionnaire';
import { auditUserMock, codeableConceptMock, durationRangeMock, priorityTypeMock } from '../../0-base';
import {
  bodyRegionMock,
  specimenTypeMock,
  practitionerMock,
  notificationMock,
  procedureTypeMock,
  bodyRegionSubRegionMock,
} from '../../1-core';
import { Types } from 'mongoose';

export const carePlanTypeConditionsMock = {
  _user: auditUserMock,
  licenseKey: 'string mock',
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  ref: 'activity one',
  name: 'string mock',
  condition: 'string mock',
  description: 'string mock',
  moveToEvent: {
    name: 'string mock',
    stage: 'string mock',
  },
  moveToActivity: 'string mock',
  action: 'change-status',
  statusToChange: 'completed',
  notification: notificationMock,
  carePlanType: {},
};

export const carePlanTypeActivityMock = {
  _user: auditUserMock,
  licenseKey: 'string mock',
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  created: new Date(),
  kind: codeableConceptMock,
  detail: {
    code: {
      ...codeableConceptMock,
      text: 'activity one',
    },
  },
  description: 'string mock',
  productReference: [medicationMock],
  bodySite: bodyRegionMock,
  sampleBodySite: bodyRegionSubRegionMock,
  laterality: codeableConceptMock,
  route: codeableConceptMock,
  scheduledTiming: {
    repeat: {
      frequency: 1,
      periodUnit: 'h',
    },
  },
  priority: priorityTypeMock,
  category: 'string mock',
  examType: codeableConceptMock,
  questionnaireType: questionnaireTypeMock,
  procedure: procedureTypeMock,
  specimenType: specimenTypeMock,
  medicationAdministration: {
    concentrationUnitType: codeableConceptMock,
    concentrationType: codeableConceptMock,
    concentration: 5,
    quantity: 20,
    supplyUnit: codeableConceptMock,
    supply: 10,
    supplyDurationUnit: 'days',
    supplyDuration: 7,
  },
  kafkaEvent: 'appointment',
  eventId: 'string mock',
  index: 1,
  autoSend: false,
  notification: notificationMock,
  highPriority: false,
};

export const carePlanTypeEventMock = {
  _user: auditUserMock,
  licenseKey: 'string mock',
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  name: 'string mock',
  stage: 'string mock',
  isMilestone: false,
  description: 'string mock',
  durations: [durationRangeMock],
  conditions: [carePlanTypeConditionsMock],
  index: 1,
};

export const carePlanTypeStageMock = {
  _user: auditUserMock,
  licenseKey: 'string mock',
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  stage: stageMock,
};

export const carePlanTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  author: [practitionerMock],
  title: 'string mock',
  description: 'string mock',
  addresses: [codeableConceptMock],
  goal: 'string mock',
  intent: ['healing'],
  active: true,
  stages: [carePlanTypeStageMock],
  events: [carePlanTypeEventMock],
  strictTemplate: true,
  isConsecutively: false,
  licenseKey: 'string mock',
  activities: [carePlanTypeActivityMock],
  completed: false,
  enabled: false,
  isMedicalBoardTemplate: false,
  _user: auditUserMock,
};
