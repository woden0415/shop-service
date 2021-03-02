/*
 * @Author: wangdong7871@100.me
 * @Date: 2021-03-01 19:43:40
 * @Description: 处理请求
 */

import { Context, Next } from "koa";
import * as KoaRouter from '@koa/router';
const router = new KoaRouter();

router.post('/user/login', (ctx:Context,next:Next) => {
  ctx.body = '用户登录';
  next();
});
router.get('/user/info', (ctx:Context,next:Next) => {
  ctx.body = '用户信息';
  next();
});

const userRoutes = router.routes();

export default userRoutes;
