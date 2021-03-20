/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:40
 * @Description: 处理请求
 */

import { Context, Next } from "koa";
import * as KoaRouter from '@koa/router';
import Res, { IResFail } from "../../utils/res";
import { Creator } from "./creator.dao";
import { createToken, decodeToken } from "../../utils/jwt";
import { ICreator } from "./creator.interface";
const router = new KoaRouter();

// router.get('/info', (ctx: Context, next: Next) => {
//   ctx.body = Res.responseOk<ResUserInfo>(ctx.request.query);
//   // ctx.body = Res.responseFail<ResUserInfo>('111', {}, '无法获取用户信息');
//   next();
// });

/**
 * @api {post} /creator/islogin 判断用户是否登录
 * @apiName creator/islogin
 * @apiGroup creator
 * @apiSampleRequest http://localhost:3000/creator/islogin
 * @apiVersion 1.0.0
 */
router.get('/islogin', async (ctx: Context, next: Next) => {
  const shoptoken = ctx.headers.token as string;
  try {
    const res = await decodeToken(shoptoken);
    ctx.body = Res.responseOk({ msg: '登录成功' });
  } catch (error) {
    ctx.body = Res.responseFail('-1', {}, '登录信息失败，跳转到登录页面');
  } finally {
    next();
  }
});

/**
 * @api {post} /creator/register 用户注册
 * @apiName creator/register
 * @apiGroup creator
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
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/creator/login
 * @apiVersion 1.0.0
 */
router.post('/register', async (ctx: Context, next: Next) => {
  const params: ICreator = ctx.request.body;
  if (!params['email'] || !params['pwd']) {
    ctx.body = Res.responseFail<IResFail>('-1', null, '无法获取用户信息');
    next();
    return;
  }
  const { email, pwd } = params;
  const creator = new Creator();
  creator.email = email;
  creator.pwd = pwd;
  // await creator.saveUser(creator);
  ctx.body = Res.responseOk({
    token: createToken({ email, pwd })
  });
  next();
})

const creatorRoutes = router.routes();
export default creatorRoutes;
