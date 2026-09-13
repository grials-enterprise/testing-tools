import { Types } from 'mongoose';
import { auditUserMock, codeableConceptMock } from '../../0-base';

export const healtMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  weight: {
    massUnit: codeableConceptMock,
    value: 70,
  },
  height: {
    lengthUnit: codeableConceptMock,
    value: 175,
  },
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
