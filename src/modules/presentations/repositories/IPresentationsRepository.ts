import Presentation from '../infra/typeorm/entities/Presentation';
import ICreatePresentationDTO from '../dtos/ICreatePresentationDTO';

export default interface IPresentationsRepository {
  findByRoom(room: number): Promise<Presentation | undefined>;
  findById(id: number): Promise<Presentation | undefined>;
  create(data: ICreatePresentationDTO): Promise<Presentation>;
  save(presentation: Presentation): Promise<Presentation>;
}
