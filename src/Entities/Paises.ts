import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';

@Entity()
export default class Pais {
  @PrimaryGeneratedColumn()
  id: number;

  @Index({ unique: true })
  @Column({
    length: 100,
    unique: true,
    nullable: false,
  })
  pais: string;

  @Index({ unique: true })
  @Column({
    nullable: false,
  })
  pathImage: string;
}

export { Pais };
