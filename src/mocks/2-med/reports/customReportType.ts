import { practitionerMock } from '../../1-core/practitioner';
import { auditUserMock } from '../../0-base';
import { attendanceMock } from '../notes/attendance';
import { Types } from 'mongoose';

export const customReportTypeMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  practitioner: practitionerMock,
  reportType: 'string mock',
  title: 'string mock',
  text: 'string mock',
  episodeText: 'string mock',
  evolutionText: 'string mock',
  examOrderText: 'string mock',
  paraclinicalExamText: 'string mock',
  procedureText: 'string mock',
  header: 'string mock',
  footer: 'string mock',
  flowType: 'string mock',
  customization: {
    active: true,
    activeHeader: true,
    activeFooter: true,
    activeSigning: true,
    background: attendanceMock,
    header: attendanceMock,
    paperSize: {
      generic: 'letter',
      custom: {
        unit: 'mm',
        width: 210,
        height: 297,
      },
      midcard: {
        unit: 'mm',
        width: 105,
        height: 148,
      },
    },
    orientation: 'portrait',
    font: {
      fontType: 'Arial',
      unit: 'pt',
      size: 11,
    },
    margins: {
      unit: 'mm',
      left: {
        value: 1,
      },
      top: {
        value: 1,
      },
      right: {
        value: 1,
      },
      bottom: {
        value: 1,
      },
    },
  },
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
