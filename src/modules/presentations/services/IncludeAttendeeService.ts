import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Presentation from '../infra/typeorm/entities/Presentation';
import IPresentationsRepository from '../repositories/IPresentationsRepository';

interface IRequest {
  attendee_email: string;
  presentation_id: number;
}

@injectable()
class IncludeAttendeeService {
  constructor(
    @inject('PresentationsRepository')
    private presentationsRepository: IPresentationsRepository
  ) { }

  async execute({ attendee_email, presentation_id }: IRequest): Promise<Presentation> {
    const presentation = await this.presentationsRepository.findById(presentation_id);
    const attendee = await this.presentationsRepository.findById(presentation_id);

    if (!presentation) {
      throw new AppError(`No presentation found for the id "${presentation_id}".`, 404);
    } else if (!attendee) {
      throw new AppError(`No attendee found with the email "${attendee_email}".`, 404);
    }

    // const newAttendees = [...presentation.attendees, attendee]

    // const updatedPresentation = await this.presentationsRepository.save({
    //   ...presentation,
    //   attendees: newAttendees
    // });

    return presentation;
  }
}

export default IncludeAttendeeService;
