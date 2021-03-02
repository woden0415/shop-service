import * as Koa from "koa";
import router from './route';

const app = new Koa();
app.use(router.routes());
app.use(router.allowedMethods());

//设置监听端口
app.listen(3000, () => {
    console.log("服务器开启 127.0.0.1:3000");
});
