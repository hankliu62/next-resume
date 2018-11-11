/* eslint no-console:0 */

const http = require('http');

const createApp = require('./app');

const isDev = process.env.NODE_ENV !== 'production';
const port = isDev ? parseInt(process.env.PORT, 10) || 3000 : 80;

createApp()
  .then((app) => { http.createServer(app.callback()).listen(port); })
  .then(() => {
    if (isDev) {
      // eslint-disable-next-line
      console.log(`> Ready on http://localhost:${port}`);
    } else {
      // eslint-disable-next-line
      console.log('server is starting port ' + port);
    }
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
