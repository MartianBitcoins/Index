import React from 'react'
import Header from '../Header/Index'
import TitleGeneral from '../Generic/TitleGeneral'
import Description from '../Generic/Description'
import Divider from '../Generic/Divider'
import Buttom from '../Generic/Buttom'
import Footer from '../Footer'
import Table from '../Table/Index'
import TwoColumnWrap from '../Generic/TwoColumnWrap'
import { Tabs, Label, TabContainer, WrapperTabs, WrappersTabs } from '../Tabs'
import {WrapperText, Img, BoxInfo, WrapperLine} from './style'
import GeneralIndex from  './GeneralIndex.js'
import { connect } from 'cerebral-view-react'
import { state, props } from 'cerebral'


export default connect({},

  class CoinsDetails extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        <div>
          <Header />
          <div className="total-center">
            <WrapperText>
              <TitleGeneral marginBottom="20px">{ props.CoinsPage.coinDetail.name || 'Gourmet Red'}</TitleGeneral>
              <Description>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </Description>
            </WrapperText>
          </div>
          <div className="total-center">
            <TwoColumnWrap marginTop="40px" marginBottom="50px">
              <Img src= "../public/assets/images/img-1.jpg" alt="imagenes" />
              <div>
                <div className="total-center">
                  <Divider width="95%"/>
                </div>
                <BoxInfo>
                  <WrapperLine>
                    <TitleGeneral marginBottom="20px" fontSize="62px" fontWeight="400" >4.8</TitleGeneral>
                    <Description>Rating</Description>
                  </WrapperLine>
                  <div>
                    <Description>PREICO TIME</Description>
                    <TitleGeneral marginBottom="20px" size="16px" fontWeight="600">Ended</TitleGeneral>
                    <Description>ICO TIME</Description>
                    <TitleGeneral marginBottom="20px" size="16px" fontWeight="600">34 Days 23 hrs</TitleGeneral>
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
                    <TitleGeneral marginTop="20px" marginTop="20px">About Gourmet Red</TitleGeneral>
                    <Description marginTop="20px">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                                        Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
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
      )}
  }
)
