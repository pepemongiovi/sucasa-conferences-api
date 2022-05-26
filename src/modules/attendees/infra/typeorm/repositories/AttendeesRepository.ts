import { Repository, getRepository } from 'typeorm';

import IAttendeesRepository from '@modules/attendees/repositories/IAttendeesRepository';
import ICreateAttendeeDTO from '@modules/attendees/dtos/ICreateAttendeeDTO';

import Attendee from '../entities/Attendee';

class AttendeesRepository implements IAttendeesRepository {
  private ormRepository: Repository<Attendee>;

  constructor() {
    this.ormRepository = getRepository(Attendee);
  }

  public async findByEmail(email: string): Promise<Attendee | undefined> {
    const attendee = await this.ormRepository.findOne({ where: { email } });
    return attendee;
  }

  public async create(attendeeData: ICreateAttendeeDTO): Promise<Attendee> {
    const attendee = this.ormRepository.create(attendeeData);

    await this.ormRepository.save(attendee);
    return attendee;
  }

  public async save(attendee: Attendee): Promise<Attendee> {
    return this.ormRepository.save(attendee);
  }
}

export default AttendeesRepository;
