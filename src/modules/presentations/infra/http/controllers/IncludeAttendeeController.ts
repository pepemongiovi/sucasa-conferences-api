import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import IncludeAttendeeService from '@modules/presentations/services/IncludeAttendeeService';

export default class IncludeAttendeeController {
  public async includeNewAttendee(request: Request, response: Response): Promise<Response> {
    const { presentation_id } = request.params;
    const { attendee_email } = request.body;

    const includeAttendee = container.resolve(IncludeAttendeeService);

    const presentation = await includeAttendee.execute({
      presentation_id: Number(presentation_id),
      attendee_email,
    });

    return response.json(classToClass(presentation));
  }
}
