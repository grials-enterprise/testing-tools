import { auditUserMock } from '../0-base';
import { notificationMock } from './notification';

export const notificationManagerConditionsMock = {
  name: 'Condition one',
  resource: 'patient',
  condition: '[patient_active] === true',
  description: 'Description for condition one',
  action: 'complete',
};

export const notificationManagerMock = {
  name: 'string mock',
  licenseKey: 'string mock',
  active: true,
  conditions: [],
  mainCondition: {
    complete: 'string mock',
    cancelled: 'string mock',
  },
  notificationsToSend: [
    {
      notification: notificationMock,
      index: 0,
      mainCondition: {
        skip: 'string mock',
        complete: 'string mock',
      },
      conditions: [notificationManagerConditionsMock],
      when: {
        sendType: 'time',
        minHour: 0,
        maxHour: 23,
        offset: 350,
        time: {
          value: '5m',
        },
        dateTime: {
          strict: false,
          day: 1,
          dayweek: 0,
        },
      },
    },
  ],
  _user: auditUserMock,
};
