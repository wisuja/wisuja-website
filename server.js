require('dotenv').config();
const app = require('express')();
const http = require('http');
const next = require('next');

const server = http.createServer({}, app);

const port = process.env.PORT || 3000;
const host = process.env.HOST || 'localhost';
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, host, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${host}:${port}`);
  });
});
