/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:40
 * @Description: 处理请求
 */

import { Context, Next } from "koa";
import * as KoaRouter from '@koa/router';
const router = new KoaRouter();

router.get('/info', (ctx:Context,next:Next) => {
  ctx.body = ctx.request.query;
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
 * @apiParam {string} email 邮箱
 * @apiParam {string} pwd 密码
 * @apiParam {string} phone 手机号
 * @apiParam {string} captcha 手机验证码
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
router.post('/register', (ctx: Context, next: Next) => {
  ctx.body = ctx.request.body;
  next();
})

const userRoutes = router.routes();
export default userRoutes;
