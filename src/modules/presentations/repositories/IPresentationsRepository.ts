import Presentation from '../infra/typeorm/entities/Presentation';
import ICreatePresentationDTO from '../dtos/ICreatePresentationDTO';

export default interface IPresentationsRepository {
  findById(id: number): Promise<Presentation | undefined>;
  create(data: ICreatePresentationDTO): Promise<Presentation>;
  save(presentation: Presentation): Promise<Presentation>;
}
