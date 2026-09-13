import { ratioMock, quantityMock, auditUserMock, codeableConceptMock, identifierMock } from '../../0-base';
import { practitionerMock } from '../../1-core/practitioner';
import { Types } from 'mongoose';

export const substanceMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'Substance',
  status: 'active',
  category: [codeableConceptMock],
  code: codeableConceptMock,
  description: 'string mock',
  instance: [
    {
      identifier: identifierMock,
      expiry: new Date('2020-01-01'),
      quantity: quantityMock,
    },
  ],
  ingredient: [
    {
      quantity: ratioMock,
      substance: {
        substanceCodeableConcept: ratioMock,
        substanceReference: { key: 'value' }, // Mock data for SchemaTypes.Mixed
      },
    },
  ],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
