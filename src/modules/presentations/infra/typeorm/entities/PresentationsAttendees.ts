import Attendee from '@modules/attendees/infra/typeorm/entities/Attendee';
import {
  Entity,
  PrimaryColumn,
  CreateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('presentations_attendees')
class PresentationsAttendees {
  @PrimaryColumn("int")
  attendeeId: number;

  @PrimaryColumn("int")
  presentationId: number;

  @ManyToMany(() => Attendee, { onUpdate: "CASCADE" })
  @JoinTable()
  attendees: Attendee;

  @CreateDateColumn()
  created_at: Date;
}

export default PresentationsAttendees;
