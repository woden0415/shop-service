import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import db from '../../utils/db';
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '邮箱', length: 50 })
  email: string;

  @Column({ comment: '密码', length: 50 })
  pwd: string;


  /**
   * @description 新增
   * @param user {User}
   */
  async insertUser(user: User) {
    const connection = await db;
    await connection.manager.insert(User, user);
  }

  /**
   * @description 修改
   * @param {User} user
   */
  async saveUser(user: User) {
    const connection = await db;
    await connection.manager.save(user);
  }

  /**
   * @description 删除
   * @param user {User}
   */
  removeUser(params: string): void;
  removeUser(params: string[]): void;
  async removeUser(params: string | string[]) {
    const connection = await db;

    await connection.manager.delete(User, params);
  }

  /**
   * @description 查找用户
   * @param user {User}
   */
  findUser(params: object): Promise<User[]>;
  async findUser(params: object): Promise<User[]> {
    const connection = await db;
    let users: User[] = null;
    users = await connection.manager.find(User, params);
    return users;
  }
}
