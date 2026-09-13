import { Types } from 'mongoose';
import { auditUserMock } from '../0-base';
import { notificationChannelMock } from './notificationChannel';

const whatsappPayloadMock = {
  namespace: 'string mock',
  template: 'string mock',
  locale: {
    policy: 'deterministic',
    code: 'en',
  },
  params: [
    {
      type: 'header',
      parameters: [
        {
          type: 'text',
          text: 'Header Text',
        },
      ],
    },
    {
      type: 'body',
      parameters: [
        {
          type: 'image',
          image: {
            link: 'https://example.com/image.jpg',
          },
        },
      ],
    },
    {
      type: 'footer',
      parameters: [
        {
          type: 'currency',
          currency_code: 'USD',
          amount_1000: 1000,
          fallback_value: 10,
        },
      ],
    },
    {
      type: 'button',
      sub_type: 'url',
      index: 0,
      parameters: [
        {
          type: 'date_time',
          component: 'date',
          unix_epoch: '1627849200',
          fallback_value: '2021-08-01',
        },
      ],
    },
  ],
  chatId: '1234567890',
  phone: '+1234567890',
};

export const notificationMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  name: 'string mock',
  resource: 'PractitionerUser',
  event: 'string mock',
  email: {
    enabled: false,
    channel: notificationChannelMock,
    payload: {
      id: 'string mock',
      properties: {
        anyThing: 'value',
      },
      label: 'string mock',
      emailToSend: 'string mock',
    },
  },
  sms: {
    enabled: false,
    payload: 'string mock',
    channel: notificationChannelMock,
  },
  whatsapp: {
    enabled: false,
    payload: whatsappPayloadMock,
    channel: notificationChannelMock,
  },
  licenseKey: 'string mock',
  active: true,
  _user: auditUserMock,
};
