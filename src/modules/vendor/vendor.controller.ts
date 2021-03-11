/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:40
 * @Description: 处理请求
 */

import { Context, Next } from "koa";
import * as KoaRouter from '@koa/router';
import Res from "../../utils/res";
import { Vendor } from "./vendor.dao";
// import { ResUserInfo } from "./vendor.interface";
import VendorService from "./vendor.service";
const router = new KoaRouter();

/**
 * @api {post} /vendor/register 用户登录
 * @apiName vendor/register
 * @apiGroup vendor
 * @apiParam {string} email 邮箱
 * @apiParam {string} phone 手机号
 * @apiParam {string} captcha 短信验证码
 * @apiParam {string} pwd 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      code: '0',
 *      datas: {msg: '注册成功'},
 *      message: '请求成功',
 *      success: true,
 *      timestamp: new Date().getTime()
 *  }
 * @apiSampleRequest http://localhost:3000/vendor/register
 * @apiVersion 1.0.0
 */
router.post('/register', (ctx: Context, next: Next) => {
  // 在controller层获取ctx数据，在service中处理数据
  const vendor: Vendor = null;
  const { email, pwd } = (ctx.body as Vendor);
  // const email = (ctx.body as Vendor).email;
  // const pwd = (ctx.body as Vendor).pwd;
  VendorService.registerHandler({ email, pwd });
  ctx
  next();
});

router.get('/info', (ctx: Context, next: Next) => {
  // ctx.body = Res.responseOk<ResUserInfo>(ctx.request.query);
  // ctx.body = Res.responseFail<ResUserInfo>('111', {}, '无法获取用户信息');
  next();
});

/**
 * @api {post} /user/login 用户登录
 * @apiName user/login
 * @apiGroup user
 * @apiParam {string} email 邮箱
 * @apiParam {string} pwd 密码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "name" : "loginName",
 *          "password" : "loginPass"
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/user/login
 * @apiVersion 1.0.0
 */
router.get('/login', (ctx: Context, next: Next) => {
  ctx.body = ctx.request.body;
  next();
});

/**
 * @api {post} /user/register 用户注册
 * @apiName user/register
 * @apiGroup user
 * @apiParam {string} [email] 邮箱
 * @apiParam {string} [pwd] 密码
 * @apiParam {string} [phone] 手机号
 * @apiParam {string} [captcha] 手机验证码
 * @apiSuccess {json} result
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "success" : "true",
 *      "result" : {
 *          "name" : "loginName",
 *          "password" : "loginPass"
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/user/login
 * @apiVersion 1.0.0
 */
router.post('/register', async (ctx: Context, next: Next) => {
  // const user = new User();
  // user.firstName = "12121";
  // user.lastName = "22222";
  // user.age = 25;
  // await user.saveUser(user);
  // const list = await user.findUser({ firstName: "12121" });
  // console.log('list :>> ', list);
  // ctx.body = ctx.request.body;
  // next();
})

const userRoutes = router.routes();
export default userRoutes;
