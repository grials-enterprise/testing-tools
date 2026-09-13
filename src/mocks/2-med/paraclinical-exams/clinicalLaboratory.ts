import { Types } from 'mongoose';
import { auditUserMock } from '../../0-base';

export const clinicalLaboratoryMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  active: true,
  licenseKey: 'string mock',
  category: 'LAB',
  laboratoryResult: [
    {
      valueName: 'string mock',
      resultType: 'string mock',
      quantitativeResult: 100,
      qualitativeResult: 'string mock',
    },
  ],
  _user: auditUserMock,
};
