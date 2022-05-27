import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';
import Attendee from '../infra/typeorm/entities/Attendee';
import IAttendeesRepository from '../repositories/IAttendeesRepository';

interface IRequest {
  name: string;
  company: string;
  email: string;
}

@injectable()
class CreateAttendeeService {
  constructor(
    @inject('AttendeesRepository')
    private attendeesRepository: IAttendeesRepository
  ) { }
  async execute({ name, company, email }: IRequest): Promise<Attendee> {
    const isEmailTaken = await this.attendeesRepository.findByEmail(email);

    if (isEmailTaken) {
      throw new AppError('Email already registered.', 409);
    }

    const attendee = await this.attendeesRepository.create({ name, company, email });

    return attendee;
  }
}

export default CreateAttendeeService;
