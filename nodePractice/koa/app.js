let Koa = require('koa');

let app = new Koa();

// app.use( async(ctx, next) => {
//     await next();
//     ctx.request.type = 'text/html';
//     ctx.response.body = '<h1>Hello koa!</h1>'
// });

app.use(async (ctx, next) => {
    console.log(1); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    console.log(2)
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(3,`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    console.log(4)
    await next();
    console.log(5)
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// 1
// 2
// 4
// 5
// 3 'Time: 3ms'

app.listen(9091);