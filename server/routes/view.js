const router = require('koa-router')();
/*
const JWT = require('koa-jwt');

// 秘钥
const JWTSecret = '6d86628q7uo';
const JWTExpiresTime = 30 * 60 * 60 * 24 * 7;

function genJWTToken() {
  const payload = {
    exp: Date.now() + JWTExpiresTime,
    name: genUUID(),
  };

  return JWT.encode(payload, JWTSecret);
}
*/

function randStr(len) {
  return Math.random().toString(16).slice(2, 2 + len);
}

function genUUID() {
  return `${randStr(8)}-${randStr(4)}-${randStr(4)}-${randStr(4)}-${randStr(8)}${randStr(4)}`;
}

// View endpoints
router.get('/', async (ctx) => {
  if (!ctx.session.token) {
    ctx.session.token = genUUID();
  }

  await ctx.render({
    screen: 'Resume',
  });
});

router.get('/resume', async (ctx) => {
  if (!ctx.session.token) {
    ctx.session.token = genUUID();
  }

  await ctx.render({
    screen: 'Resume',
  });
});

router.get('/blog', async (ctx) => {
  if (!ctx.session.token) {
    ctx.session.token = genUUID();
  }

  await ctx.render({
    screen: 'Blog',
  });
});

module.exports = router;
