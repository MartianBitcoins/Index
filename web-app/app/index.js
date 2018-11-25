import App from 'cerebral'
import Devtools from 'cerebral/devtools'
import React from 'react'
import { hydrate } from 'react-dom'
import { Container } from '@cerebral/react'
import AppComponent from './components/App'
import main from './main'

main.state = window.mbiState

const app = App(main, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})

hydrate(
  <Container app={app}>
    <AppComponent />
  </Container>,
  document.querySelector('#app')
)
