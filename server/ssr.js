
const Router = require('koa-router');
const NextJs = require('next');
const translations = require('../resources');

const CookieLang = 'hk:lang';

module.exports = async function setupSSR(app) {
  // Setup Next.js
  const nextEngine = NextJs({ dev: process.env.NODE_ENV !== 'production' });
  const handle = nextEngine.getRequestHandler();
  await nextEngine.prepare();

  // eslint-disable-next-line no-param-reassign
  app.context.render = async function render({ screen, props = {}, options }) {
    const ctx = this;
    let locale = ctx.cookies.get(CookieLang);
    if (!locale) {
      locale = 'zh-CN';
      ctx.cookies.set(CookieLang, locale, {
        domain: ctx.request.domain, // 写cookie所在的域名
        path: '/', // 写cookie所在的路径
        maxAge: 1000 * 60 * 60 * 24 * 30 * 12, // cookie有效时长
        httpOnly: false, // 是否只用于http请求中获取
        overwrite: true, // 是否允许重写
      });
    }
    // eslint-disable-next-line
    props.translations = translations[locale];

    // Here we take the React.js page and convert it to HTML in the server
    // After the client downloads the JS files (see /_next/) the React.js is re-hydrated

    // https://github.com/zeit/next.js/blob/canary/server/render.js
    const html = await nextEngine.renderToHTML(
      ctx.req,
      ctx.res,
      `/${screen}`,
      props,
      options,
    );
    ctx.body = html;
    return html;
  };

  // eslint-disable-next-line no-param-reassign
  app.context.renderBoomError = async function renderBoomError(err) {
    const ctx = this;

    const {
      output: { payload },
    } = err;
    ctx.status = payload.statusCode || 500;

    return ctx.render({
      props: {
        statusCode: payload.statusCode,
        error: payload.error,
        message: payload.message,
      },
      options: {
        staticMarkup: true,
      },
    });
  };

  const router = new Router();

  router.get('/_next/*', async (ctx) => {
    // Ups! we need because Next.js send the response prematurely
    ctx.respond = false;
    await handle(ctx.req, ctx.res);
  });

  app.use(router.routes());

  return app;
};
