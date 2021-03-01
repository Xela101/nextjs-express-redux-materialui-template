const express = require('express');

const app = express();
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const http = require('http');

const server = http.createServer(app);
const port = 3000;

nextApp.prepare().then(() => {
  app.get('*', (req, res) => nextHandler(req, res));

  server.listen(port, () => console.log(`Server is running on port ${port}`));
});
