/* eslint-disable no-console */
const logger = require('./logger');
const app = require('./app');
const port = process.env.PORT || 3030;
const host = process.env.HOST || "127.0.0.1";
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', host, port)
);

