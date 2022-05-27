import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AttendeeRegistrationController from '../controllers/AnttendeeRegistrationController';

const attendeesRouter = Router();
const attendeeRegistrationController = new AttendeeRegistrationController();

attendeesRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      company: Joi.string().required(),
      email: Joi.string().email().required(),
    },
  }),
  attendeeRegistrationController.create,
);

export default attendeesRouter;
