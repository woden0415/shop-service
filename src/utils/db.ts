import { Sequelize, DataTypes, Model } from "sequelize";

// 手动创建一个库叫wd_shop，然后执行该语句
const sequelize = new Sequelize('wd_shop', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;

//  sequelize.authenticate();
