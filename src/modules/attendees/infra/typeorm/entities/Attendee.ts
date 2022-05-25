import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('attendees')
class Attendee {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  company: string;

  @Column()
  email: string;

  @Column()
  bio: string;

  @CreateDateColumn()
  registered: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Attendee;
