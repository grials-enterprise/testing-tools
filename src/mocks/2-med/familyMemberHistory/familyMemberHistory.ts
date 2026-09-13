import { periodMock, rangeMock, auditUserMock, codeableConceptMock } from '../../0-base';
import { annotationMock } from '../../1-core';
import { patientMock } from '../../1-core/patient';
import { practitionerMock } from '../../1-core/practitioner';
import { Types } from 'mongoose';

export const familyMemberHistoryMock = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'FamilyMemberHistory',
  status: 'completed',
  dataAbsentReason: codeableConceptMock,
  patient: patientMock,
  date: new Date('2020-01-01'),
  name: 'string mock',
  relationship: codeableConceptMock,
  sex: codeableConceptMock,
  bornPeriod: periodMock,
  bornDate: new Date('1990-01-01'),
  bornString: 'string mock',
  ageAge: 30,
  ageRange: rangeMock,
  ageString: 'string mock',
  estimatedAge: true,
  deceasedBoolean: false,
  deceasedAge: 80,
  deceasedRange: rangeMock,
  deceasedDate: new Date('2070-01-01'),
  deceasedString: 'string mock',
  reasonCode: [codeableConceptMock],
  reasonReference: [{ key: 'value' }], // Mock data for SchemaTypes.Mixed
  note: [annotationMock],
  condition: [
    {
      code: codeableConceptMock,
      outcome: codeableConceptMock,
      contributedToDeath: false,
      ageAge: 30,
      ageRange: rangeMock,
      agePeriod: periodMock,
      ageString: 'string mock',
      note: [annotationMock],
    },
  ],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
