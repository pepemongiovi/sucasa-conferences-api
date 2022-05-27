import { Repository, getRepository } from 'typeorm';
import IPresentationsRepository from '@modules/presentations/repositories/IPresentationsRepository';
import ICreatePresentationDTO from '@modules/presentations/dtos/ICreatePresentationDTO';
import Presentation from '../entities/Presentation';

class PresentationsRepository implements IPresentationsRepository {
  private ormRepository: Repository<Presentation>;

  constructor() {
    this.ormRepository = getRepository(Presentation);
  }

  public async findById(id: number): Promise<Presentation | undefined> {
    const presentation = await this.ormRepository.findOne(id);

    return presentation;
  }

  public async findByRoom(room: number): Promise<Presentation | undefined> {
    const presentation = await this.ormRepository.findOne({ where: { room } });

    return presentation;
  }

  public async create(presentationData: ICreatePresentationDTO): Promise<Presentation> {
    const presentation = this.ormRepository.create(presentationData);

    await this.ormRepository.save(presentation);

    return presentation;
  }

  public async save(presentation: Presentation): Promise<Presentation> {
    return this.ormRepository.save(presentation);
  }
}

export default PresentationsRepository;
