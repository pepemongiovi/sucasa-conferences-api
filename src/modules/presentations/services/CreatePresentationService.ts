import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Presentation from '../infra/typeorm/entities/Presentation';
import IPresentationsRepository from '../repositories/IPresentationsRepository';

interface IRequest {
  presentation: string;
  details: string;
  room: number;
}
@injectable()
class CreatePresentationService {
  constructor(
    @inject('PresentationsRepository')
    private presentationsRepository: IPresentationsRepository
  ) { }

  async execute({ presentation, details, room }: IRequest): Promise<Presentation> {
    const isRoomTaken = await this.presentationsRepository.findByRoom(room);

    if (isRoomTaken) {
      throw new AppError('Room unavailable.', 409);
    }

    const newPresentation = await this.presentationsRepository.create({ presentation, details, room });
    return newPresentation;
  }
}

export default CreatePresentationService;
