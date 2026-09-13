import { auditUserMock, humanNameMock, attachmentMock, codeableConceptMock } from '../0-base';
import { organizationalChartMock } from '../1-core/organizationalChart';
import { Types } from 'mongoose';

export const scheduleProfileMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  organizationalChart: organizationalChartMock,
  scheduleAppointment: true,
  scheduleProcedure: true,
  scheduleReception: true,
  simultAppointments: {
    unlimited: false,
    totalSimultaneous: 5,
  },
  overshift: false,
  active: true,
  licenseKey: 'string mock',
  practitioner: {
    name: [humanNameMock],
    photo: attachmentMock,
    specialty: [codeableConceptMock],
  },
  _user: auditUserMock,
};
