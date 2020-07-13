
const fs = require('fs');
const koa = require('koa');
const helmet = require("koa-helmet");    // koa-helmet >=2.x (master branch) supports koa 2.x
// const static = require('koa-static');
const staticMD = require('./koa-showdown.js');

function genApp(home) {
    const app = new koa();
    app.use(helmet());

    // app.use(static(home));
    app.use(staticMD(home));     // like koa-static, but translates markdown

    // response
    app.use(ctx => {
      ctx.body = 'Hello Koa';
    });

    return app.callback();  // compatibility with http2.createSecureServer(req,res)
}

module.exports = genApp;