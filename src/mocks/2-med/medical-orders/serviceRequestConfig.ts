import { Types } from 'mongoose';
import { auditUserMock, attachmentMock } from '../../0-base';
import { organizationalChartMock } from '../../1-core/organizationalChart';

export const serviceRequestConfigMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  organizationalChart: organizationalChartMock,
  header: {
    practitionerFields: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    align: 'right',
    logoAlign: 'left',
    show: true,
    logoFullHeader: {
      active: false,
      image: attachmentMock,
    },
  },
  footer: {
    practitionerFields: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    align: 'center',
    show: true,
  },
  signature: {
    practitionerFields: { key: 'value' }, // Mock data for SchemaTypes.Mixed
    align: 'left',
    show: true,
  },
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
  background: attachmentMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
