import { Types } from 'mongoose';
import { caseMock } from '../medical-board';
import { appointmentMock } from '../../3-schedule';
import { attachmentMock, auditUserMock } from '../../0-base';

export const medicalBoardReportMock: any = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  case: caseMock,
  medicalBoard: appointmentMock,
  file: attachmentMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
