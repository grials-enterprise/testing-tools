import { Types } from 'mongoose';

const menuBasicMock = {
  active: true,
  url: 'string mock',
};
export const menuMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  consent: menuBasicMock,
  patients: menuBasicMock,
  medicines: menuBasicMock,
  reception: menuBasicMock,
  statistics: menuBasicMock,
  procedures: menuBasicMock,
  appointments: menuBasicMock,
  hostRoomChat: menuBasicMock,
  clinicControl: menuBasicMock,
  clinicalTables: menuBasicMock,
  customizeReport: menuBasicMock,
  occupancyControl: menuBasicMock,
  organizationClient: menuBasicMock,
  organizationalCharts: menuBasicMock,
  globalConfigurations: menuBasicMock,
  casesRequestForAdmission: menuBasicMock,
  casesRequestForReception: menuBasicMock,
  carePlan: menuBasicMock,
};
