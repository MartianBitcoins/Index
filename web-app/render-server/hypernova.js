import React from 'react'
import HypernovaServer from 'hypernova/server'
import { renderReact } from 'hypernova-react'
import { UniversalApp } from 'cerebral'
import { Container } from '@cerebral/react'
import logger from './lib/logger'
import config from '../config'
import App from '../src/components/App'
import main from '../src/main'


// Boot hypernova render server
logger.debug('[render.jsx] booting hypernova server')

HypernovaServer({
  devMode: true,

  loggerInstance: logger,

  // getComponent() {
  //   function MyComponent(props) {
  //     return <div>Hello, dick!</div>;
  //   }

  //   return renderReact('MyComponent.js', MyComponent)
  // },

  // TODO: should i require the component on the top of the file or here?
  // TODO: should i bypass the cache to reload changes on the code?
  // TODO: Render errors are swallowed by hypernova
  getComponent(name) {
    try {
      logger.debug(`[render.jsx] hypernova - getComponent - name: ${name}`)

      console.log(
        '[render.jsx] rendering AppWrapper with initial state',
        name
      )

      // function setInitialState({ store, props }) {
      //   // store.set(state.app.user, props.user)
      // }

      // app.run(setInitialState, {})

      const app = UniversalApp(main)

      // await app.run(setInitialState, {})
      const AppWrapper = React.createElement(
        Container,
        { app: app },
        React.createElement(App, null)
      )

      const AppWrapper =

      // TODO: Render error are swallowed by hypernova
      return renderReact('App', AppWrapper)
    } catch (e) {
      logger.error(
        '[Error - hypernova.js - getComponent()]',
        e.message,
        e.stack
      )
      throw e
    }
  },

  port: config.hypernovaPort,
})
