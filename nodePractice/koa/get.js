let Koa = require('koa');

let app = new Koa();

let router = require('koa-router') ();

router.get('/hello/:name', async(ctx, next) => {
    let name = ctx.params.name;
    ctx.response.body = `<h1>Hello ${name}</h1>`;
});

router.get('/', async(ctx, next) => {
    ctx.response.body = '<h1>Index</h1>'
});

app.use(router.routes());

app.listen(3000);