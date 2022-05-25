import Attendee from '../infra/typeorm/entities/Attendee';
import ICreateAttendeeDTO from '../dtos/ICreateAttendeeDTO';

export default interface IAttendeesRepository {
  findByEmail(email: string): Promise<Attendee | undefined>;
  create(data: ICreateAttendeeDTO): Promise<Attendee>;
  save(attendee: Attendee): Promise<Attendee>;
}
