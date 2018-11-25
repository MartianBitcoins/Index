const { UniversalApp } = require('cerebral')
const React = require('react')
const { Container } = require('@cerebral/react')
const { renderToString } = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')
const { factory: mainFactory } = require('../app-build/main')
const { default: AppComponent } = require('../app-build/components/App/index')
const logger = require('./lib/logger')
const htmlTemplate = require('./html')
const config = require('../config')

module.exports = async function render(ctx) {
  // TODO: Validate state and implement new state
  const newState = ctx.request.body.state

  // TODO: try/catch
  const main = mainFactory({ newState })
  const app = UniversalApp(main)
  const sheet = new ServerStyleSheet()
  const appHtml = renderToString(
    sheet.collectStyles(
      React.createElement(
        Container,
        { app: app },
        React.createElement(AppComponent, null)
      )
    )
  )
  const styleTags = sheet.getStyleTags()
  logger.debug('[render.js] styleTags:', styleTags)

  logger.debug('[render.js] reactHMTL:', appHtml)
  logger.debug('[render.js] state:', main.state)

  const htmlText = htmlTemplate({
    production: !config.isDeveloping,
    body: appHtml,
    state: main.state,
    styleTags,
  })

  ctx.response.body = { html: htmlText }
}
