import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';
import { episodeReportMock } from './episodeReport';
import { evolutionReportMock } from './evolutionReport';
import { proceduresReportMock } from './proceduresReport';
import { examsOrderReportMock } from './examsOrderReport';
import { paraclinicalReportMock } from './paraclinicalExamsReport';

export const epicrisisReportMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  epicrisisId: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  episodeReport: episodeReportMock,
  evolutionReport: [evolutionReportMock],
  examOrders: [examsOrderReportMock],
  diagnosticReports: [paraclinicalReportMock],
  procedures: [proceduresReportMock],
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
