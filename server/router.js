const Router = require('koa-router');

module.exports = async function createRouter() {
  const router = new Router();

  // View endpoints
  router.get('/', async (ctx) => {
    await ctx.render({
      screen: 'Resume',
    });
  });

  router.get('/resume', async (ctx) => {
    await ctx.render({
      screen: 'Resume',
    });
  });

  router.get('/blog', async (ctx) => {
    await ctx.render({
      screen: 'Blog',
    });
  });

  // API endpoints

  return router;
};
