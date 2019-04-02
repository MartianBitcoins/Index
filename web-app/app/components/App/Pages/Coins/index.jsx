import React from 'react';
//import DropdownList from 'react-widgets/lib/DropdownList'
//import 'react-widgets/dist/css/react-widgets.css'
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import Layout from '../Layout/Index'
import Targets from '../TargetBox/Targets';
import TitleGeneral from '../Generic/TitleGeneral';
import TopPicks from '../TopPicks/Index'
import GeneralIndex from './GeneralIndex'


const Coins = (props) => (
        <Layout  history={props.history}>
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
                  <Targets  history={props.history}/>
                  <Targets  history={props.history}/>
                  <Targets  history={props.history}/>
                  <Targets  history={props.history}/>
                  <Targets  history={props.history}/>
                  <Targets  history={props.history}/>
                </BoxTargets>
              </div>
          </GridContainer>
          <GeneralIndex />
        </Layout>
    )

export default Coins;

const GridContainer =styled.div`
  display: grid;
  grid-template-rows: auto auto 300px auto
`

const BoxTargets = styled.div`
    width:100%;
    max-width:1400px;
    height:auto;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap:15px;
    padding:20px;
    margin-bottom:15px;
`
const BoxCategories = styled.div`
    width: 200px;
    height:25px;
`
const FixBrowser = styled.div`
    width:90%;
    max-width: 600px;
    height: auto;
    display:flex;
    justify-content:space-around;
    align-items:center;
    @media(max-width:768px){
      flex-direction:column;
    }
`
const OptionsBrowser = styled.div`
    width:100%;
    min-height: 90px;
    display:flex;
    justify-content:center;
    align-items:center
`
const SearchContainer = styled.div`
    width: 70px;
    height:37px;
    border: none;
    border-bottom-right-radius:10px;
    border-top-right-radius:10px;
    display: flex;
    align-items:center;
    justify-content:center;
    background:white;
`
const InputBrowser = styled.input`
    width: 250px;
    height:35px;
    border: none;
    outline:none;
    padding-left:15px;
    border-bottom-left-radius:10px;
    border-top-left-radius:10px;
    ::placeholder{
      text-align:center;
    }
`
const InputBox = styled.div`
    width: 90%;;
    height:auto;
    justify-content:center;
    align-items:center;
    display:flex;
`
const BrowserHeader = styled.div`
    width: 100%;
    height:200px;
    background-image:url("public/assets/images/backgra.jpg");
    background-position:50%;
    background-size:cover;
    display: flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`
