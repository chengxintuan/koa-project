const Koa = require('koa');
const fs = require('fs')
const loggerAsync = require('./logger-async');
const route = require('./route');

const app = new Koa();

app.use(loggerAsync());

app.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await route.route(url);
    ctx.body = html;
});

app.listen(3000);
console.log('the server is starting at port 3000');