import { container } from 'tsyringe';

import IAttendeesRepository from '@modules/attendees/repositories/IAttendeesRepository';
import AttendeesRepository from '@modules/attendees/infra/typeorm/repositories/AttendeesRepository';

import IPresentationsRepository from '@modules/presentations/repositories/IPresentationsRepository';
import PresentationsRepository from '@modules/presentations/infra/typeorm/repositories/PresentationsRepository';

container.registerSingleton<IAttendeesRepository>(
  'AttendeesRepository',
  AttendeesRepository,
);

container.registerSingleton<IPresentationsRepository>(
  'PresentationsRepository',
  PresentationsRepository,
);