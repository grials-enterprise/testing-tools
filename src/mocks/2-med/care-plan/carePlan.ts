import mongoose from 'mongoose';
import { auditUserMock, identifierMock, codeableConceptMock, durationRangeMock, priorityTypeMock } from '../../0-base';
import {
  patientMock,
  bodyRegionMock,
  notificationMock,
  specimenTypeMock,
  practitionerMock,
  procedureTypeMock,
  bodyRegionSubRegionMock,
} from '../../1-core';
import { stageMock } from './stage';
import { episodeMock } from '../episodes';
import { medicationMock } from '../medications';
import { conditionMock } from '../observations';
import { carePlanTypeMock } from './carePlanType';
import { questionnaireTypeMock } from '../questionnaire';

export const carePlanConditionsMock = {
  _user: auditUserMock,
  licenseKey: 'string mock',
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  _id: new mongoose.Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
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
  carePlanType: carePlanTypeMock,
};

export const carePlanActivityMock = {
  _user: auditUserMock,
  licenseKey: 'string mock',
  _id: new mongoose.Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
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
  category: 'string mock',
  examType: codeableConceptMock,
  questionnaireType: questionnaireTypeMock,
  priority: priorityTypeMock,
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
  autoSend: false,
  kafkaEvent: 'appointment',
  eventId: 'string mock',
  index: 1,
  notification: notificationMock,
  highPriority: false,
};

export const carePlanEventMock = {
  _id: new mongoose.Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  _user: auditUserMock,
  licenseKey: 'string mock',
  name: 'string mock',
  stage: 'string mock',
  isMilestone: false,
  description: 'string mock',
  conditions: [carePlanConditionsMock],
  durations: [durationRangeMock],
  index: 1,
};

export const carePlanStageMock = {
  _id: new mongoose.Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  _user: auditUserMock,
  licenseKey: 'string mock',
  stage: stageMock,
};

export const carePlanMock: any = {
  _id: new mongoose.Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  created: new Date(),
  author: [practitionerMock],
  title: 'string mock',
  description: 'string mock',
  addresses: [conditionMock],
  goal: 'string mock',
  encounter: episodeMock,
  evolution: new mongoose.Types.ObjectId().toString(),
  intent: ['healing'],
  status: 'active',
  subject: patientMock,
  active: true,
  licenseKey: 'string mock',
  identifier: [identifierMock],
  activities: [carePlanActivityMock],
  _user: auditUserMock,
  isMedicalBoardTemplate: false,
  strictTemplate: true,
  isConsecutively: false,
  campaignName: 'string mock',
  templateId: 'string mock',
  stages: [carePlanStageMock],
  events: [carePlanEventMock],
};
