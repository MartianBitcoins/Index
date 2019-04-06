import React from 'react'
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md'
import Layout from '../Layout/Index'
import Targets from '../TargetBox/Targets'
import TitleGeneral from '../Generic/TitleGeneral'
import TopPicks from '../TopPicks/Index'
import GeneralIndex from './GeneralIndex'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'
import {
  GridContainer,
  BoxTargets,
  BoxCategories,
  FixBrowser,
  OptionsBrowser,
  SearchContainer,
  InputBrowser,
  InputBox,
  BrowserHeader
} from './style'

export default connect({
  coinsPage: state.CoinsPage
}, function CoinsPage({coinsPage: { coins } }) {
  return (
    <Layout>
      <GridContainer>
        <BrowserHeader>
          <TitleGeneral marginBottom="20px" fontSize="32px" fontFamily="Open Sans" color="white">Browser Projects</TitleGeneral>
          <InputBox>
            <InputBrowser type="text" placeholder="Type key words"/>
            <SearchContainer>
              <MdSearch className="searchicon"/>
            </SearchContainer>
          </InputBox>
        </BrowserHeader>
        <div className="total-center">
          <TopPicks/>
        </div>
        <OptionsBrowser>
          <FixBrowser>
            <TitleGeneral fontSize="20px" marginRight="10px">Show me</TitleGeneral>
            <BoxCategories>

            </BoxCategories>
            <TitleGeneral fontSize="20px" marginRight="10px">About</TitleGeneral>
            <BoxCategories>

            </BoxCategories>
          </FixBrowser>
        </OptionsBrowser>
        <div className="total-center">
          <BoxTargets>
            { coins.map((coin) => {
              return <Targets  data={ coin } />
            }) }
          </BoxTargets>
        </div>
      </GridContainer>
      <GeneralIndex />
    </Layout>
  )
})

