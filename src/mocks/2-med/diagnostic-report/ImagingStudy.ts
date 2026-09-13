import { episodeMock } from '../episodes';
import { specimenMock } from '../specimen';
import { procedureMock } from '../procedures';
import { serviceRequestMock } from '../medical-orders';
import { codingMock, auditUserMock, identifierMock, codeableConceptMock } from '../../0-base';
import {
  patientMock,
  locationMock,
  endpointMock,
  annotationMock,
  practitionerMock,
  bodyRegionMock,
} from '../../1-core';
import { Types } from 'mongoose';

export const imagingStudyMock: any = {
  _id: new Types.ObjectId().toString(), // Mock data for SchemaTypes.ObjectId
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  resourceType: 'ImagingStudy',
  identifier: [identifierMock],
  status: 'registered',
  modality: [codingMock],
  subject: patientMock,
  encounter: episodeMock,
  started: new Date('2020-01-01'),
  basedOn: [serviceRequestMock], // Mock data for SchemaTypes.Mixed
  referrer: practitionerMock,
  interpreter: practitionerMock,
  endpoint: endpointMock,
  numberOfSeries: 1,
  numberOfInstances: 1,
  procedureReference: procedureMock,
  procedureCode: [codeableConceptMock],
  location: locationMock,
  reasonCode: [codeableConceptMock],
  note: [annotationMock],
  description: 'string mock',
  series: [
    {
      uid: 'string mock',
      number: 1,
      modality: codingMock,
      description: 'string mock',
      numberOfInstances: 1,
      endpoint: [endpointMock],
      bodySite: bodyRegionMock,
      laterality: codingMock,
      specimen: [specimenMock],
      started: new Date('2020-01-01'),
      performer: [
        {
          function: codeableConceptMock,
          actor: practitionerMock, // Mock data for SchemaTypes.Mixed
        },
      ],
      instance: [
        {
          uid: 'string mock',
          sopClass: codingMock,
          number: 1,
          title: 'string mock',
        },
      ],
    },
  ],
  practitioner: practitionerMock,
  active: true,
  licenseKey: 'string mock',
  _user: auditUserMock,
};
