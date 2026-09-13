import { auditUserMock, attachmentMock, codeableConceptMock } from '../0-base';
import { integrationsMock } from './integrations';
import { procedureTypeMock } from '../1-core/procedureType';
import { Types } from 'mongoose';

export const globalSettingMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  country: codeableConceptMock,
  measurement: {
    measurementSystemType: 'metric',
    length: codeableConceptMock,
    mass: codeableConceptMock,
    weight: codeableConceptMock,
    area: codeableConceptMock,
    volume: codeableConceptMock,
    time: codeableConceptMock,
    acceleration: codeableConceptMock,
    frequency: codeableConceptMock,
    pressure: codeableConceptMock,
    speed: codeableConceptMock,
  },
  temperatureScale: 'celsius',
  dateTime: {
    timeMask: 'am-pm',
    timeZoneChange: false,
    timeZone: codeableConceptMock,
    alternativeTimeZone: codeableConceptMock,
    timeZoneChangeDate: 'string mock',
    alternativeTimeZoneChangeDate: 'string mock',
  },
  amount: {
    currency: codeableConceptMock,
    decimalSeparator: '.',
    thousandsSeparator: ',',
  },
  workingDay: {
    start: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    end: { key: 'value' }, // Mock data for SchemaTypes.Mixed
  },
  placesAdministration: {
    immediateAvailability: true,
    dayVisualization: true,
  },
  logo: attachmentMock,
  useMedicationsCatalog: true,
  useMedicationsFromWarehouse: false,
  specimenCollectionMode: {
    value: 'standard',
    collectionCenterLevel: 1,
  },
  frontendIntegrations: [integrationsMock],
  backendIntegrations: [integrationsMock],
  licenseKey: 'string mock',
  allowedPatients: 0,
  requiredPatientFields: {
    sex: false,
    fiscalId: false,
    address: false,
    email: false,
    phone: false,
    birthPlace: false,
    civilStatus: false,
    educationLevel: false,
    mainPractitioner: false,
  },
  communicationChannels: {
    appointmentRequests: {
      whatsapp: false,
      sms: false,
      email: false,
    },
    appointmentReminders: {
      whatsapp: false,
      sms: false,
      email: false,
    },
    appointmentNotifications: {
      whatsapp: false,
      sms: false,
      email: false,
    },
    examOrders: {
      whatsapp: false,
      sms: false,
      email: false,
    },
    examResults: {
      whatsapp: false,
      sms: false,
      email: false,
    },
    carePlanTracking: {
      whatsapp: false,
      sms: false,
      email: false,
    },
  },
  defaultProcedures: [procedureTypeMock],
  active: true,
  _user: auditUserMock,
};
