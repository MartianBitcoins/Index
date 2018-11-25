// const homeQueries = require('../../queries/home')
const expressAsyncHandler = require('express-async-handler')
const logger = require('../lib/logger')
const render = require('../lib/render')

async function homeGET (req, res) {
  logger.info('GET / route called')
  // const {data: testString} = await homeQueries.getTestString()

  const state = {
    testData: 'This is some state string :)',
  }

  // TODO: handle errors
  logger.debug('[home.js] calling render');
  const renderRes = await render({ state })
  logger.debug('[home.js] render response', renderRes)

  // res.set('Content-Type', 'text/html');
  res.send(renderRes.html)
}

module.exports = expressAsyncHandler(homeGET)