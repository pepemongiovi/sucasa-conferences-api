import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class CreatePresentationsAttendees1624378259149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'presentations_attendees',
      columns: [
        {
          name: 'attendeeId',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'presentationId',
          type: 'int',
          isPrimary: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
      ],
    }))

    await queryRunner.createForeignKey('presentations_attendees',
      new TableForeignKey({
        columnNames: ['attendeeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'attendees',
      })
    );

    await queryRunner.createForeignKey('presentations_attendees',
      new TableForeignKey({
        columnNames: ['presentationId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'presentations',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('presentations_attendees');
  }
}