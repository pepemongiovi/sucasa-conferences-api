import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateAttendeeService from '@modules/attendees/services/CreateAttendeeService';

export default class AttendeeRegistrationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, company, email, bio } = request.body;

    const createAttendee = container.resolve(CreateAttendeeService);

    const attendee = await createAttendee.execute({ name, company, email, bio });

    return response.json(classToClass(attendee));
  }
}
