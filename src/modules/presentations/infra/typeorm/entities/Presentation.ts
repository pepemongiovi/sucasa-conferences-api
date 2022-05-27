import Attendee from '@modules/attendees/infra/typeorm/entities/Attendee';
import { Speaker } from '@modules/presentations/dtos/ICreatePresentationDTO';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('presentations')
class Presentation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Attendee, { onUpdate: "CASCADE" })
  @JoinTable()
  attendees: Attendee;

  @Column()
  presentation: string;

  @Column()
  details: string;

  @Column()
  room: number;

  @Column({ type: 'json' })
  speaker: Speaker;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Presentation;
