const { UniversalApp } = require('cerebral')
const React = require('react')
const { Container } = require('@cerebral/react')
const { renderToString } = require('react-dom/server')
const { ServerStyleSheet } = require('styled-components')
const logger = require('./lib/logger')
const htmlTemplate = require('./html')
const config = require('../config')

module.exports = async function render(ctx) {
  // TODO: Cache on Prod
  const { factory: mainFactory } = require('../app-build/main')
  const { default: AppComponent } = require('../app-build/components/App/index')

  // TODO: Validate state and implement new state
  const newState = ctx.request.body.state

  let htmlText
  try {
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

    htmlText = htmlTemplate({
      production: !config.isDeveloping,
      body: appHtml,
      state: main.state,
      styleTags,
    })
  } catch (err) {
    console.error('Error rendering app:')
    console.error(err)
    ctx.status = 500
    ctx.body = { error: 'Internal Server Error' }
    return
  }

  ctx.body = { html: htmlText }
}
