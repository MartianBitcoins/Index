import React from 'react'
import styled from 'styled-components'

import TwoColumnWrap from '../Generic/TwoColumnWrap'
import ProgressBar from '../ProgressBar/Index'
import TitleGeneral from '../Generic/TitleGeneral'
import Description from '../Generic/Description'

const Targets = (props) => (
  <DesignTargets href={`coins/${ props.data._id } `} className="opacity">
    < Img src = "public/assets/images/pumpkin.jpg"
      alt = "imagenes" />
    <FixTargets2>
      <DetailsTargets>
        <TitleGeneral color="575757" fontWeight="600" fontSize="14px" marginTop="5px">ICO</TitleGeneral>
        <DownLine/>
        <TitleGeneral >{ props.data.name }</TitleGeneral>
        <Description marginTop="5px" fontSize="12px" >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis.</Description>
        <div className="total-center">
          <TwoColumnWrap sizeColumns=" 1fr 1fr" marginTop="25px" marginBottom="15px">
            <Description textAlign="center" fontSize='12px'>by Roger Medina</Description>
            <Description textAlign="center" fontSize='12px'>Cozumel. Mix</Description>
          </TwoColumnWrap>
        </div>
        <ProgressBar
          progress="70%"
          initialDate="2018-08-15"
          finalDate="2018-11-05"
          primaryAmount="$2,000,000"
          secondatyAmount="4K"
        />

      </DetailsTargets>
    </FixTargets2>
  </DesignTargets>
)

export default Targets

const ByCity = styled.div`
    width:100%;
    height:auto;
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:10px
`
const DownLine = styled.div`
    width:100%;
    height:1px;
    background:black;
    margin-bottom:3px;
    margin-top:3px;
`
const DetailsTargets = styled.div`
    width:90%;
    min-height:auto;
    background:white;
`
const Img = styled.img `
    width: 100%;
    height: 250px;
`

const FixTargets2 = styled.div`
    width:100%;
    min-height:auto;
    display: flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    padding-bottom: 20px;
`
const DesignTargets = styled.a`
    width:100%;
    max-width: 350px;
    min-height: 320px;
    background: #FFFFFF;
    text-decoration: none;
`
