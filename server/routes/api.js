const Boom = require('boom');
const fs = require('fs');
const path = require('path');
const router = require('koa-router')();

router.prefix('/api');

router.get('/api/post/:id', (ctx) => {
  if (!ctx.session.token) {
    throw Boom.unauthorized('Authenticate Failed');
  } else {
    const filePath = path.resolve(__dirname, '../../static/source/_posts', `${ctx.params.id}.md`);
    fs.readFile(filePath, 'utf-8', (err, data) => { // 读取用户列表json文件
      if (err) {
        throw Boom.notFound('Post Not Fount');
      } else {
        ctx.body = { post: data };
      }
    });
  }
});

module.exports = router;
