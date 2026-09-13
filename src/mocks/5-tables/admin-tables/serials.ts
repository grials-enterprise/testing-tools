import { organizationalChartMock } from '../../1-core/organizationalChart';
import { auditUserMock, codeableConceptMock } from '../../0-base';
import { Types } from 'mongoose';

export const serialsMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  component: organizationalChartMock,
  name: 'Serie Fiscal 2024',
  type: 'fiscal',
  description: 'Serie para documentos fiscales del año 2024',
  documentType: codeableConceptMock,
  counter: {
    initialNumber: 1,
    currentValue: 1,
    endNumber: 9999,
    startDate: new Date('2024-01-01T00:00:00Z'),
    endDate: new Date('2024-12-31T23:59:59Z'),
    reinitiate: false,
    frequency: 'yearly',
    mask: [
      { type: 'literal', order: 1, value: 'FISCAL' },
      { type: 'aa', order: 2, value: '24' },
      { type: 'numeric', order: 3, value: '0001' },
    ],
    currentLabel: 'FISCAL-24-0001',
    currentDate: new Date('2024-01-01T00:00:00Z'),
  },
  active: true,
  licenseKey: 'SERIAL-001-TEST',
  _user: auditUserMock,
};
