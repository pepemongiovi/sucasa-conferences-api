import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreatePresentationService from '@modules/presentations/services/CreatePresentationService';

export default class PresentationRegistrationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { presentation, details, room, speaker } = request.body;

    const createPresentation = container.resolve(CreatePresentationService);

    const newPresentation = await createPresentation.execute({
      presentation,
      details,
      room,
      speaker,
    });

    return response.json(classToClass(newPresentation));
  }
}
