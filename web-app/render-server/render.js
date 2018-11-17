const path = require('path')
const _ = require('lodash')
const { UniversalApp } = require('cerebral')
const { renderToString } = require('react-dom/server')
const AppComponent = require('../app/main')
const logger = require('./lib/logger')
const htmlTemplate = require('./html')
const config = require('../config')

// '/render' route
module.exports = async function render(ctx) {
  // TODO: Validate state and implement new state
  const newState = ctx.request.body.state

  // TODO: should we try catch?
  const app = UniversalApp(main)
  // Set initial state
  const appHtml = renderToString(React.createElement(AppComponent, null))

  logger.debug('[render.js] reactHMTL:', appHtml)

  const htmlText = htmlTemplate({
    production: !config.isDeveloping,
    body: appHtml,
  })

  ctx.response.body = { html: htmlText }
}
