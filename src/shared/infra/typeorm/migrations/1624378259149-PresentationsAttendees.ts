import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export default class CreateAttendeesPresentations1624378259149 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'attendees_presentations',
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
      ],
    }))

    await queryRunner.createForeignKey('attendees_presentations',
      new TableForeignKey({
        columnNames: ['attendeeId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'attendees',
      })
    );

    await queryRunner.createForeignKey('attendees_presentations',
      new TableForeignKey({
        columnNames: ['presentationId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'presentations',
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('attendees_presentations');
  }
}