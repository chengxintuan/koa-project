const path = require('path');
const fs = require('fs');

const pagePath = path.join(__dirname, 'src', 'page');

/**
 * 用Promise封装异步读取文件方法
 * @param  {string} page html文件名称
 * @return {promise}
 */
function render(viewPath, url) {
    return new Promise((resolve, reject) => {
        fs.readFile(viewPath, "binary", (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

/**
 * 根据URL获取HTML内容
 * @param  {string} url koa2上下文的url，ctx.url
 * @return {string}     获取HTML文件内容
 */
async function route(url) {
    console.log("url", url);

    let view = path.join(pagePath, '404.html');

    switch (url) {
        case '/':
            view = path.join(pagePath, 'index.html');
            break;
        case '/home':
            view = path.join(pagePath, 'home', 'index.html');
            break;
        case '/404':
            view = view;
            break;
        default:
            break;
    }

    const html = await render(view, url);

    console.log("html", html);

    return html;
}

module.exports = {
    render: render,
    route: route
}