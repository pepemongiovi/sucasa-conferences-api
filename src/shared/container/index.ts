import { container } from 'tsyringe';

import IAttendeesRepository from '@modules/attendees/repositories/IAttendeesRepository';
import AttendeesRepository from '@modules/attendees/infra/typeorm/repositories/AttendeesRepository';

import IPresentationsRepository from '@modules/presentations/repositories/IPresentationsRepository';
import PresentationsRepository from '@modules/presentations/infra/typeorm/repositories/PresentationsRepository';
import PresentationsAttendeesRepository from '@modules/presentations/infra/typeorm/repositories/PresentationsAttendeesRepository';
import IPresentationsAttendeesRepository from '@modules/presentations/repositories/IPresentationsAttendeesRepository';

container.registerSingleton<IAttendeesRepository>(
  'AttendeesRepository',
  AttendeesRepository,
);

container.registerSingleton<IPresentationsRepository>(
  'PresentationsRepository',
  PresentationsRepository,
);

container.registerSingleton<IPresentationsAttendeesRepository>(
  'PresentationsAttendeesRepository',
  PresentationsAttendeesRepository,
);