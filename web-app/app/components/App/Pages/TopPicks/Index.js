import React from 'react';
import styled from 'styled-components';

import TwoColumnWrap from '../Generic/TwoColumnWrap';
import Divider from '../Generic/Divider';
import Description from '../Generic/Description';
import ProgressBar from '../ProgressBar/Index'
import TitleGeneral from '../Generic/TitleGeneral';

const Index = () => (
    <Wrapper>
        < TitleGeneral 
            fontSize="32px"
            marginTop="20px"
            marginBottom="10px"
        > 
            Top picks review 
        </TitleGeneral>
        <div className="total-center">
            <TwoColumnWrap sizeColumns=" 1fr 1fr">
                <Img src="public/assets/images/img-2.jpg" alt="imagenes" />
                <WrapperInfoMain>
                    <div>
                        <TitleGeneral color="575757" fontWeight="400">ICO</TitleGeneral>
                        <div className="total-center">
                            <Divider maxWidth="95%" />
                        </div>
                    </div>
                    <div>
                        <TitleGeneral marginTop="20px">Martian Bitcoins</TitleGeneral>
                        <Description marginTop="20px">
                            Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                        </Description>
                    </div>
                    <div className="total-center">
                        <TwoColumnWrap sizeColumns=" 1fr 1fr">
                            <Description textAlign="center">by Roger Medina</Description>
                            <Description textAlign="center">Cozumel. Mix</Description>
                        </TwoColumnWrap>
                    </div>          
                        <ProgressBar
                        progress="70%"
                        initialDate="2018-08-15"
                        finalDate="2018-11-05"
                        primaryAmount="$2,000,000"
                        secondatyAmount="4K"
                    />
                </WrapperInfoMain>
            </TwoColumnWrap>
        </div>
    </Wrapper>
);

const Wrapper = styled.div `
    margin-top: 30px;
    width:95%;
    max-width: 1200px;
    height: auto;
`

const Img = styled.img `
    width: 100%;
    height: 400px;
    object-fit: cover
`

const WrapperInfoMain = styled.div `
  display: grid;
  grid-template-rows: 20px 1fr 0.4fr auto;
`

const PicksReview = styled.div `
    width:100%;
    height: 100px;
    display:flex;
    align-items:center;
    justify-content:center;
`
export default Index;