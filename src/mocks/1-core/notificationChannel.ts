import { Types } from 'mongoose';

export const notificationChannelMock = {
  _id: new Types.ObjectId().toString(),
  name: 'string mock',
  channelType: 'email',
  provider: 'sendgrid',
  whatsapp: {
    token: 'string mock',
    namespace: 'string mock',
    instanceId: 'string mock',
  },
  email: {
    key: 'string mock',
  },
  licenseKey: 'string mock',
  active: true,
};
