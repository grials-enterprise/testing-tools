import { auditUserMock } from './auditUser';
import { codeableConceptMock } from './codeableConcept';
import { Types } from 'mongoose';

export const priorityTypeMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  active: true,
  code: codeableConceptMock,
  colorCode: 'string mock',
  licenseKey: 'string mock',
  value: 1,
  stylePriority: {
    backgroundColor: 'string mock',
    color: 'string mock',
  },
  _user: auditUserMock,
};
