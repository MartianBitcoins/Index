import React from 'react'
import Header from '../Header/Index'
import TitleGeneral from '../Generic/TitleGeneral'
import Description from '../Generic/Description'
import Divider from '../Generic/Divider'
import Buttom from '../Generic/Buttom'
import Footer from '../Footer'
import Table from '../Table/Index'
import TwoColumnWrap from '../Generic/TwoColumnWrap'
import { Tabs, Label, TabContainer, WrappersTabs } from '../Tabs'
import {WrapperText, Img, BoxInfo, WrapperLine} from './style'
import GeneralIndex from  './GeneralIndex.js'

import { state } from 'cerebral'
import { connect } from '@cerebral/react'


export default connect({
  coinsDetails: state.CoinsDetails
}, function  CoinsDetails({coinsDetails: { coinDetail } }) {
  return (
    <div>
      <Header />
      <div className="total-center">
        <WrapperText>
          <TitleGeneral marginBottom="20px">{coinDetail.name}</TitleGeneral>
          <Description>
            {coinDetail.descriptions}
          </Description>
        </WrapperText>
      </div>
      <div className="total-center">
        <TwoColumnWrap marginTop="40px" marginBottom="50px">
          <Img src= {coinDetail.image || '../public/assets/images/img-1.jpg'} alt="imagenes" />
          <div>
            <div className="total-center">
              <Divider width="95%"/>
            </div>
            <BoxInfo>
              <WrapperLine>
                <TitleGeneral marginBottom="20px" fontSize="62px" fontWeight="400" >{coinDetail.rating}</TitleGeneral>
                <Description>Rating</Description>
              </WrapperLine>
              <div>
                <Description>PREICO TIME</Description>
                <TitleGeneral marginBottom="20px" size="16px" fontWeight="600">
                  {coinDetail.price_time}
                </TitleGeneral>
                <Description>ICO TIME</Description>
                <TitleGeneral marginBottom="20px" size="16px" fontWeight="600">
                  {coinDetail.ico_time}
                </TitleGeneral>
              </div>
              <div style={{ gridColumn: '1 / 3'}}>
                <Buttom>Black this proyect</Buttom>
              </div>
            </BoxInfo>
          </div>
        </TwoColumnWrap>
      </div>
      <div className="total-center">
        <TwoColumnWrap>
          <div>
            <WrappersTabs>
              <Tabs>
                <Label>About</Label>
                <Label>TimeLine</Label>
                <Label>Team</Label>
                <Label>Financial</Label>
                <Label>Rating</Label>
                <Label>White paper</Label>
              </Tabs>
              <TabContainer>
                <TitleGeneral marginTop="20px" marginTop="20px">About {coinDetail.name}</TitleGeneral>
                <Description marginTop="20px">
                  {coinDetail.descriptions}
                </Description>
              </TabContainer>
            </WrappersTabs>
          </div>
          <div style={{justifySelf: 'center'}}>
            <Table maxWidth="100%"/>
          </div>
        </TwoColumnWrap>
      </div>
      <GeneralIndex />
      <Footer/>
    </div>
  )
})
