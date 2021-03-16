/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:40
 * @Description: 处理请求
 */

import { Context, Next } from "koa";
import * as KoaRouter from '@koa/router';
import Res from "../../utils/res";
import { User } from "./user.dao";
import { IReqLogin, ResUserInfo } from "./user.interface";
import { createToken, decodeToken } from "../../utils/jwt";
const router = new KoaRouter();

router.get('/info', (ctx: Context, next: Next) => {
  ctx.body = Res.responseOk<ResUserInfo>(ctx.request.query);
  // ctx.body = Res.responseFail<ResUserInfo>('111', {}, '无法获取用户信息');
  next();
});

/**
 * @api {post} /user/islogin 判断用户是否登录
 * @apiName user/islogin
 * @apiGroup user
 * @apiSampleRequest http://localhost:3000/user/islogin
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
 *      }
 *  }
 * @apiSampleRequest http://localhost:3000/user/login
 * @apiVersion 1.0.0
 */
router.post('/register', async (ctx: Context, next: Next) => {
  const params: IReqLogin = ctx.request.body;
  if (!params['email'] || !params['pwd']) {
    ctx.body = Res.responseFail<ResUserInfo>('-1', null, '无法获取用户信息');
    next();
    return;
  }
  const { email, pwd } = params;
  const user = new User();
  user.email = email;
  user.pwd = pwd;
  await user.saveUser(user);
  ctx.body = Res.responseOk({
    token: createToken({ email, pwd })
  });
  next();
})

const userRoutes = router.routes();
export default userRoutes;
