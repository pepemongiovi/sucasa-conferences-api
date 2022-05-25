import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AttendeeRegistrationController from '../controllers/AttendeeRegistrationController';
import IncludeAttendeeController from '../controllers/IncludeAttendeeController';

const presentationsRouter = Router();
const attendeeRegistrationController = new AttendeeRegistrationController();
const includeAttendeeController = new IncludeAttendeeController();

presentationsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      presentation: Joi.string().required(),
      details: Joi.string().required(),
      room: Joi.number().required(),
    },
  }),
  attendeeRegistrationController.create,
);

presentationsRouter.post(
  '/:presentation_id/attendees',
  celebrate({
    [Segments.PARAMS]: {
      presentation_id: Joi.number().required(),
    },
    [Segments.BODY]: {
      attendee_email: Joi.string().required(),
    },
  }),
  includeAttendeeController.includeNewAttendee,
);

export default presentationsRouter;
