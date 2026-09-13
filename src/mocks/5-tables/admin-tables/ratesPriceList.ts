import { Types } from 'mongoose';
import { taxMock } from '../../1-core/tax';
import { codeMock } from '../../1-core/code';
import { practitionerRoleAdminMock } from './practitionerRole';
import { auditUserMock, codeableConceptMock } from '../../0-base';

export const ratesPriceListMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  rate: new Types.ObjectId().toString(),
  code: codeMock,
  name: 'Consulta General',
  description: 'Precio para consulta general',
  price: 500,
  tax: [taxMock],
  practitionerRole: [practitionerRoleAdminMock],
  additionalItem: [
    {
      code: codeMock,
      ammount: 100,
    },
  ],
  additionalCode: [codeableConceptMock],
  currency: codeableConceptMock,
  active: true,
  licenseKey: 'RPL-001-TEST',
  _user: auditUserMock,
};
