import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import db from '../../utils/db';
@Entity()
export class Vendor {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 20, comment: '供应商id' })
  venderid?: string;

  @Column({ length: 50, comment: '供应商名称' })
  name?: string;

  @Column({ length: 20, comment: '邮箱' })
  email?: string;

  @Column({ length: 50, comment: '密码' })
  pwd?: string;

  @Column({ length: 12, comment: '联系方式' })
  phone?: string;

  @Column({ length: 100, comment: '地址' })
  address?: string;

  @Column({ length: 10, comment: '联系人' })
  contact?: string;


  /**
   * @description 新增
   * @param vendor {Vendor}
   */
  insert(vender: Vendor): void;
  async insert(vendor: Vendor) {
    const connection = await db;
    await connection.manager.insert(Vendor, vendor);
  }

  /**
   * @description 修改
   * @param vendor {Vendor}
   */
  async modify(vendor: Vendor): Promise<Vendor> {
    const connection = await db;
    return await connection.manager.save(vendor);
  }

  /**
   * @description 删除
   * @param vendor {Vendor}
   */
  remove(params: object): void;
  async remove(params: object) {
    const connection = await db;
    await connection.manager.delete(Vendor, params);
  }

  /**
   * @description 查找
   * @param user {User}
   */
  find(params: object): Promise<Vendor[]>;
  async find(params: object): Promise<Vendor[]> {
    const connection = await db;
    let vendors: Vendor[] = null;
    vendors = await connection.manager.find(Vendor, params);
    return vendors;
  }
}
