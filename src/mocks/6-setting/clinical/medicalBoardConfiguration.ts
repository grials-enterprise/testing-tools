import { Types } from 'mongoose';

export const medicalBoardConfigurationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  synopsisMaxLength: 5000,
  hasCasesLimit: false,
  casesLimit: 100,
  minimalElementsForPreparation: {
    synopsis: false,
    reports: false,
    comorbidities: false,
    encounters: false,
    questionnaires: false,
    questionnairesList: [
      {
        id: 'string mock',
        name: 'string mock',
      },
    ],
    carePlan: false,
    paraclinicalExams: false,
    paraclinicalExamsList: {
      laboratory: false,
      imagenology: false,
      pathologicalAnatomy: false,
      biomarkers: false,
      functionalExams: false,
    },
    diagnosis: false,
    diagnosisTypesList: [
      {
        id: 'string mock',
        name: 'string mock',
        staging: false,
      },
    ],
  },
};
