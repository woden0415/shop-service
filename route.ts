import * as KoaRouter from '@koa/router';
import userRoutes from './modules/user/user.controller';

const router = new KoaRouter();  //注意：引入的方式

router.get('/', function (ctx, next) {
  ctx.body = "Hello koa";
  next();
})
router.use('/user', userRoutes);

export default router;
