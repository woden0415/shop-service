/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-11 23:59:58
 * @Description: 处理业务逻辑，数据库操作
 */

import { Vendor } from "./vendor.dao";
import { ReqVendorRegister } from "./vendor.interface";


export default class VendorService {

  static async registerHandler(options: ReqVendorRegister) {
    // 先暂时考虑邮箱和密码
    const { email, pwd } = options;
    const vender = new Vendor();
    vender.email = email;
    vender.pwd = pwd;
    await vender.insert(vender);

    return '供应商的鉴权token'
  }
}