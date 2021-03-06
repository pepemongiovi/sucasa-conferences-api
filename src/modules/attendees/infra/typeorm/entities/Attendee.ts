import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('attendees')
class Attendee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  company: string;

  @Column()
  email: string;

  @CreateDateColumn()
  registered: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Attendee;
