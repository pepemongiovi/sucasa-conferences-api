import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import PresentationsAttendees from '../infra/typeorm/entities/PresentationsAttendees';
import IPresentationsRepository from '../repositories/IPresentationsRepository';
import IAttendeesRepository from '@modules/attendees/repositories/IAttendeesRepository';
import IPresentationsAttendeesRepository from '../repositories/IPresentationsAttendeesRepository';

interface IRequest {
  attendee_email: string;
  presentation_id: number;
}

@injectable()
class IncludeAttendeeService {
  constructor(
    @inject('PresentationsRepository')
    private presentationsRepository: IPresentationsRepository,
    @inject('AttendeesRepository')
    private attendeesRepository: IAttendeesRepository,
    @inject('PresentationsAttendeesRepository')
    private presentationsAttendeesRepository: IPresentationsAttendeesRepository
  ) { }

  async execute({ attendee_email, presentation_id }: IRequest): Promise<PresentationsAttendees> {
    const presentation = await this.presentationsRepository.findById(presentation_id);
    const attendee = await this.attendeesRepository.findByEmail(attendee_email);

    if (!presentation) {
      throw new AppError(`No presentation found for the id "${presentation_id}".`, 404);
    } else if (!attendee) {
      throw new AppError(`No attendee found with the email "${attendee_email}".`, 404);
    }

    const attendeeId = attendee.id
    const alreadyIncluded = await this.presentationsAttendeesRepository.findByPresentationIdAndAttendeeId(presentation_id, attendeeId)

    if (alreadyIncluded) {
      throw new AppError(`Attendee with email "${attendee_email}" already included in the presentation with id "${presentation_id}".`, 409);
    }

    const relation = await this.presentationsAttendeesRepository.create(
      { presentationId: presentation_id, attendeeId }
    )

    return relation;
  }
}

export default IncludeAttendeeService;
