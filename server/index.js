const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3030);
console.log("server listen on 3030");