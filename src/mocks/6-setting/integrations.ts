import { Types } from 'mongoose';
import { auditUserMock } from '../0-base';

export const integrationsMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  eventType: 'string mock',
  url: 'string mock',
  urlProperties: [
    {
      resource: 'string mock',
      property: 'string mock',
      formats: [
        {
          moreValues: ['string mock'],
          properties: ['string mock'],
          functionString: 'string mock',
        },
      ],
    },
  ],
  resources: ['string mock'],
  payload: {
    properties: [
      {
        propertyFrom: 'string mock',
        propertyToSend: 'string mock',
        formats: [
          {
            moreValues: ['string mock'],
            properties: ['string mock'],
            functionString: 'string mock',
          },
        ],
        required: true,
      },
    ],
    data: 'string mock',
  },
  method: 'string mock',
  active: true,
  propertiesMap: [
    {
      integrationProperty: 'string mock',
      property: 'string mock',
      valueType: 'string mock',
      formats: [
        {
          moreValues: ['string mock'],
          properties: ['string mock'],
          functionString: 'string mock',
        },
      ],
    },
  ],
  licenseKey: 'string mock',
  qualifiedWarehouses: [new Types.ObjectId().toString()], // Mock data for SchemaTypes.ObjectId
  qualifiedOrganizationalCharts: [new Types.ObjectId().toString()], // Mock data for SchemaTypes.ObjectId
  _user: auditUserMock,
};
