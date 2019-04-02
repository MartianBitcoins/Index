import React from 'react'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'
import pages from './Pages'
import GlobalReset from './GlobalReset'
import { App as AppWrapper } from './styled'

import { sequences } from 'cerebral'


// import Landing  from './Pages/Landing'
// import Health from './Pages/Health'
// import Coins from './Pages/Coins'
// import CoinsDetails from './Pages/Coins/CoinsDetails'

// const pages = {
//   home: Landing,
//   health: Health,
//   coins: Coins,
//   coinscoinsdetails: CoinsDetails
// }
export default connect( { currentPage: state.currentPage }, 
  function App({ currentPage }) {
   let Page = pages[currentPage]
    console.log('CURRENT PAGE ', currentPage)
    console.log(pages, '############ ', Page)

    if (!Page) {
      // TODO: Redirect to error page
      throw new Error(`Page ${currentPage} does not exists`)
    }

    console.log('[App Component] render()', currentPage)
  return (
    <AppWrapper>
      <Page/>
      <GlobalReset/>
    </AppWrapper>
  )
}) 