/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:40
 * @Description: 处理请求
 */

import { Context, Next } from "koa";
import * as KoaRouter from '@koa/router';
const router = new KoaRouter();

router.get('/info', (ctx:Context,next:Next) => {
  ctx.body = '用户信息';
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

router.get('/login', (ctx:Context,next:Next) => {
  ctx.body = '用户登录6';
  next();
});

const userRoutes = router.routes();
export default userRoutes;
