import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Presentation from '../infra/typeorm/entities/Presentation';
import IPresentationsRepository from '../repositories/IPresentationsRepository';
import { Speaker } from '../dtos/ICreatePresentationDTO';

interface IRequest {
  presentation: string;
  details: string;
  room: number;
  speaker: Speaker;
}

@injectable()
class CreatePresentationService {
  constructor(
    @inject('PresentationsRepository')
    private presentationsRepository: IPresentationsRepository
  ) { }

  async execute({ presentation, details, room, speaker }: IRequest): Promise<Presentation> {
    const isRoomTaken = await this.presentationsRepository.findByRoom(room);

    if (isRoomTaken) {
      throw new AppError('Room unavailable.', 409);
    }

    const newPresentation = await this.presentationsRepository.create({ presentation, details, room, speaker });
    return newPresentation;
  }
}

export default CreatePresentationService;
