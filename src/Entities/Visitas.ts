import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, Index, BeforeUpdate } from 'typeorm';
import Paises from './Paises';

@Entity()
export class Visitas {
  @Index(['local', 'pais'])
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Paises, pais => pais.id)
  pais: Paises;

  @Column({
    nullable: false,
  })
  local: string;

  @Column({
    nullable: false,
  })
  meta: string;

  @Column({ type: 'datetime', default: () => "datetime('now')" })
  created_at: Date;

  @Column({ type: 'datetime', default: () => "datetime('now')" })
  updated_at: Date;

  @BeforeUpdate()
  updateTimestamps() {
    this.updated_at = new Date();
  }
}
