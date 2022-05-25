import { Router } from 'express';
import attendeesRouter from '@modules/attendees/infra/http/routes/attendees.routes';
import presentationsRouter from '@modules/presentations/infra/http/routes/presentations.routes';

const routes = Router();

routes.use('/attendees', attendeesRouter);
routes.use('/presentations', presentationsRouter);

export default routes;
