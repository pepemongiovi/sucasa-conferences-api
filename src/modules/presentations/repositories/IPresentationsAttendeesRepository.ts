import PresentationAttendees from '../infra/typeorm/entities/PresentationsAttendees';
import ICreatePresentationsAttendeesDTO from '../dtos/ICreatePresentationsAttendeesDTO';

export default interface IPresentationsAttendeesRepository {
  findById(id: number): Promise<PresentationAttendees | undefined>;
  create(data: ICreatePresentationsAttendeesDTO): Promise<PresentationAttendees>;
  save(presentation: PresentationAttendees): Promise<PresentationAttendees>;
}
