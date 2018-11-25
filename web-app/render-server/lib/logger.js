const winston = require('winston');
const config = require('../../config');

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: config.logLevel,
      format: winston.format.json(), // TODO: Add more formaters!
    }),
  ],
});

module.exports = logger;
