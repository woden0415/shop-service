/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:29
 * @Description: 定义接口入参类型
 */

import { DataTypes, Model } from "sequelize";
import sequelize from "../../utils/db";
class User extends Model {
  id: number
  user_id: string
  email: string
  phone: string
  password: string
  createtime: number
  name: string

  constructor() {
    super();
  }

  async addUser({ user_id, email, phone, password, name = (new Date().getTime().toString()) }: { user_id: string, email: string, phone: string, password: string, name: string }) {
    const jane = await User.create({ user_id, email, phone, password, name });
    console.log(jane instanceof User); // true
    console.log(jane.name);
  }
}
const user = new User();
user.addUser({ user_id: '12312', email: 'woden0415@163.com', password: '12313', phone: '15102127423', name: '123' })

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    comment: '自增id',
  },
  user_id: {
    type: DataTypes.STRING(40),
    primaryKey: true,
    allowNull: false,
    unique: true,
    comment: '用户id',
  },
  email: {
    type: DataTypes.STRING(40),
    allowNull: true,
    unique: true,
    comment: '邮箱'
  },
  phone: {
    type: DataTypes.STRING(20),
    allowNull: true,
    unique: true,
    comment: '手机号',
  },
  password: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
    comment: '密码',
  },
  name: {
    type: DataTypes.STRING(10),
    allowNull: false,
    comment: '用户名',
  },
  createtime: {
    type: DataTypes.TIME,
    defaultValue: DataTypes.NOW,
    comment: '创建时间'
  }
}, {
  sequelize,
  tableName: 'user',
  timestamps: false
});
User.sync({ force: true });
