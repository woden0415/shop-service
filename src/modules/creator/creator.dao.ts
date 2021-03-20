import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import db from '../../utils/db';
@Entity()
export class Creator {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '创建人id', length: 50 })
  uid: string

  @Column({ comment: '邮箱', length: 50 })
  email: string;

  @Column({ comment: '密码', length: 50 })
  pwd: string;

  @Column({ comment: '手机号', length: 11 })
  phone: string;
}
