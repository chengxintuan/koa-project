function log( ctx ) {
    console.log( ctx.method, ctx.header.host + ctx.url )
}

// 中间件开发
module.exports = function () {
    return async function (ctx, next) {
        log(ctx);
        await next();
    }
}