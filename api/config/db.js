const { getEnv } = require('../lib/util')

module.exports = {
  mongoUrl: getEnv('MONGO_URL')
};
