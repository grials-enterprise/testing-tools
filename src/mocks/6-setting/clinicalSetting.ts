import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../0-base';
import { menuMock } from './clinical/menu';
import { trackingMock } from './clinical/tracking';
import { createPatientMock } from './clinical/createPatient';
import { backgroundMock } from './clinical/background';
import { receivedExamMock } from './clinical/receivedExam';
import { globalConfigurationMock } from './clinical/globalConfiguration';
import { historyMock } from './clinical/history';
import { medicalBoardConfigurationMock } from './clinical/medicalBoardConfiguration';
import { paraclinicalExamExistsMock } from './clinical/paraclinicalExam';
import { episodesSettingMock } from './clinical/episodes';
import { encounterSettingMock } from './clinical/encounter';

export const clinicalSettingMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  specialty: codeableConceptMock,
  menu: menuMock,
  tracking: trackingMock,
  createPatient: createPatientMock,
  background: backgroundMock,
  paraclinicalExams: paraclinicalExamExistsMock,
  receivedExams: receivedExamMock,
  globalConfiguration: globalConfigurationMock,
  history: historyMock,
  general_medicine: episodesSettingMock,
  intensive_care: episodesSettingMock,
  medicalBoardConfiguration: medicalBoardConfigurationMock,
  encounter: encounterSettingMock,
  encounterEditMode: 'open',
  encounterEditLimit: 10,
  catalogDiagnostic: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
  active: true,
};
