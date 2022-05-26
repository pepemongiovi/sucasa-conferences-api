import { Repository, getRepository } from 'typeorm';
import IPresentationsAttendeesRepository from '@modules/presentations/repositories/IPresentationsAttendeesRepository';
import ICreatePresentationsAttendeesDTO from '@modules/presentations/dtos/ICreatePresentationsAttendeesDTO';
import PresentationsAttendees from '../entities/PresentationsAttendees';

class PresentationsAttendeesRepository implements IPresentationsAttendeesRepository {
  private ormRepository: Repository<PresentationsAttendees>;

  constructor() {
    this.ormRepository = getRepository(PresentationsAttendees);
  }

  public async findById(id: number): Promise<PresentationsAttendees | undefined> {
    const presentation: any = await this.ormRepository.findOne(id);

    return presentation;
  }

  public async create(data: ICreatePresentationsAttendeesDTO): Promise<PresentationsAttendees> {
    const presentationAttendees = this.ormRepository.create(data);

    await this.ormRepository.save(presentationAttendees);
    return presentationAttendees;
  }

  public async save(presentationAttendees: PresentationsAttendees): Promise<PresentationsAttendees> {
    return this.ormRepository.save(presentationAttendees);
  }
}

export default PresentationsAttendeesRepository;
