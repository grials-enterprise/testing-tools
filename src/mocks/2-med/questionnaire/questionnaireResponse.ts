import { Types } from 'mongoose';
import { codingMock, auditUserMock, attachmentMock, identifierMock } from '../../0-base';
import { practitionerUserMock } from '../../4-security';

export const questionnaireResponseMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  basedOn: 'string mock',
  authored: new Date('2020-01-01'),
  author: practitionerUserMock, // Mock data for SchemaTypes.Mixed
  source: 'string mock',
  active: true,
  partOf: 'string mock',
  questionnaire: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  appointmentRequest: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  status: 'completed',
  subject: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  encounter: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  evolution: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  licenseKey: 'string mock',
  item: [
    {
      linkId: 'string mock',
      definition: 'string mock',
      text: 'string mock',
      answer: [
        {
          valueBoolean: true,
          valueDecimal: 1.0,
          valueInteger: 1,
          valueDate: new Date('2020-01-01'),
          valueDateTime: new Date('2020-01-01'),
          valueTime: new Date('2020-01-01'),
          valueString: 'string mock',
          valueUri: 'string mock',
          valueAttachment: attachmentMock,
          valueCoding: codingMock,
          valueQuantity: { key: 'value' }, // Mock data for SchemaTypes.Mixed
          valueReference: {
            reference: 'string mock',
            types: 'string mock',
            identifier: identifierMock,
            display: 'string mock',
          },
        },
      ],
    },
  ],
  _user: auditUserMock,
};
