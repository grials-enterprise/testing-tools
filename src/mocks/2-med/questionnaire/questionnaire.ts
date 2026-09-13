import { Types } from 'mongoose';
import { practitionerUserMock } from '../../4-security';
import {
  periodMock,
  codingMock,
  quantityMock,
  auditUserMock,
  attachmentMock,
  identifierMock,
  codeableConceptMock,
} from '../../0-base';

export const questionnaireMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  identifier: [identifierMock],
  url: 'string mock',
  version: 'string mock',
  name: 'string mock',
  title: 'string mock',
  status: codeableConceptMock,
  experimental: false,
  subjectType: codeableConceptMock,
  date: new Date('2020-01-01'),
  publisher: practitionerUserMock, // Mock data for SchemaTypes.Mixed
  description: 'string mock',
  jurisdiction: [codeableConceptMock],
  purpose: 'string mock',
  copyright: 'string mock',
  approvalDate: new Date('2020-01-01'),
  lastReviewDate: new Date('2020-01-01'),
  effectivePeriod: periodMock,
  code: codingMock,
  appointmentRequest: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  item: [
    {
      linkId: 'string mock',
      definition: 'string mock',
      code: [codingMock],
      prefix: 'string mock',
      text: 'string mock',
      type: 'string mock',
      enableWhen: [
        {
          question: 'string mock',
          operator: codeableConceptMock,
          answer: {
            answerBoolean: true,
            answerInteger: 1,
            answerDate: new Date('2020-01-01'),
            answerDateTime: new Date('2020-01-01'),
            answerTime: new Date('2020-01-01'),
            answerString: 'string mock',
            answerCoding: 'string mock',
            answerQuantity: 'string mock',
          },
        },
      ],
      enableBehavior: codeableConceptMock,
      require: false,
      repeats: false,
      choiceOrientation: 'string mock',
      readOnly: false,
      maxLength: 100,
      answerOption: [
        {
          value: {
            valueInteger: 1,
            valueDate: new Date('2020-01-01'),
            valueTime: new Date('2020-01-01'),
            valueString: 'string mock',
            valueCoding: codingMock,
            maxValue: 100,
            minValue: 1,
            maxDecimalPlaces: 2,
            maxLength: 100,
          },
          initialSelected: false,
        },
      ],
      initial: {
        valueBoolean: true,
        valueInteger: 1,
        valueDate: new Date('2020-01-01'),
        valueDateTime: new Date('2020-01-01'),
        valueTime: new Date('2020-01-01'),
        valueString: 'string mock',
        valueUri: 'string mock',
        valueAttachment: attachmentMock,
        valueCoding: codingMock,
        valueQuantity: quantityMock, // Mock data for SchemaTypes.Mixed
      },
      conditions: [
        {
          name: 'string mock',
          condition: 'string mock',
          otherQuestions: ['string mock', 'string mock'],
        },
      ],
    },
  ],
  sections: [
    {
      name: 'string mock',
      questions: ['string mock'],
    },
  ],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
