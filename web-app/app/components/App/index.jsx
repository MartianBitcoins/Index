import React from 'react'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'
import pages from './Pages'
import GlobalReset from './GlobalReset'
import { App as AppWrapper } from './styled'

export default connect({
  currentPage: state.currentPage,
}, function App({ currentPage }) {

  let Page = pages[currentPage]

  if (!Page) {
    // TODO: Redirect to error page
    throw new Error(`Page ${currentPage} does not exists`)
  }

  console.log('[App Component] render()')
  return (
    <AppWrapper>
      <Page/>
      <GlobalReset/>
    </AppWrapper>
  )
})