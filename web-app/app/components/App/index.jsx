import React from 'react'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'
import pages from './Pages'
import GlobalReset from './GlobalReset'
import { App as AppWrapper } from './styled'

import { sequences } from 'cerebral'

export default connect({ currentPage: state.currentPage },
  function App({ currentPage }) {
    let Page = pages[currentPage]
    if(!Page)
      throw new Error(`Page ${currentPage} does not exists`)

    return (
      <AppWrapper>
        <Page/>
        <GlobalReset/>
      </AppWrapper>
    )
  })
