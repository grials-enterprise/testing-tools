import { Types } from 'mongoose';

export const historyMock = {
  _id: new Types.ObjectId().toString(),
  createdAt: new Date('2020-01-01'),
  updatedAt: new Date('2020-01-01'),
  __v: 0,
  episodes: true,
  timeLine: true,
  tracking: true,
  informs: true,
  paraclinicalExams: true,
  prescriptions: true,
  procedures: true,
  files: true,
  constancies: true,
  samples: true,
};
