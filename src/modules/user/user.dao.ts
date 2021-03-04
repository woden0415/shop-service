/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:29
 * @Description: 定义接口入参类型
 */

import { DataTypes, Model } from "sequelize";
import sequelize from "../../utils/db";
class User extends Model {

}

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