const logger = require('../lib/logger')

function internalErrorFabric() {
  return function internalError(err, request, response, next) {
    logger.error('[INTERNAL_ERROR] ', err.message, err.stack)
    response.status(500).json({
      message: 'Internal Error',
    })
  }
}

module.exports = internalErrorFabric