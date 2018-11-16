const got = require('got')
const logger = require('./logger')
const { render: renderConfig } = require('../config')

/**
 * Calls the render server with a given state and returns the result
 **/
module.exports = async function render({ state = {} }) {
  let renderRes
  try {
    renderRes = await got.post(
      `http://${renderConfig.host}:${renderConfig.port}/render`,
      {
        body: state,
        json: true,
        throwHttpErrors: false,
      }
    )

    renderRes = renderRes.body
  } catch (e) {
    logger.error(
      '[Error - render.js] error calling render server',
      e.message,
      e.stack
    )
    throw e
  }

  return renderRes
}
