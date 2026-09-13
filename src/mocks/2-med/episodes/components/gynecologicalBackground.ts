import { Types } from 'mongoose';
import { auditUserMock } from '../../../0-base';
import { practitionerMock } from '../../../1-core/practitioner';

export const gynecologicalBackgroundMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  patientProfile: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  date: new Date('2020-01-01'),
  practitioner: practitionerMock,
  menarcheDate: 12,
  lastMenstruationDate: new Date('2020-01-01'),
  lastMenstruationDuration: 5,
  menstruationAverageDuration: 28,
  menstruationPain: true,
  ageFirstSexualRelationship: 18,
  contraceptiveMethod: true,
  contraceptiveMethodType: 'string mock',
  dispareunia: true,
  vaginalFlows: true,
  HPVBackground: true,
  bleedingOutMenstruation: true,
  menopause: true,
  menopauseStartDate: 50,
  postMenopausalHormonalSupport: true,
  postMenopausalHormonalType: 'string mock',
  postMenopausalTreatmentStartDate: new Date('2020-01-01'),
  gestations: 2,
  births: 1,
  cesarean: 1,
  abortions: 0,
  ectopicsGestation: 0,
  lactating: true,
  lastMammogramDate: new Date('2020-01-01'),
  boneDensitometryDate: new Date('2020-01-01'),
  cervicalCytologyDate: new Date('2020-01-01'),
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
