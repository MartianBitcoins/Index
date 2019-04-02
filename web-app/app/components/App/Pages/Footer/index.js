import React from 'react'
import styled from 'styled-components'
import Divider from '../Generic/Divider'
import TitleGeneral from '../Generic/TitleGeneral'
import Description from '../Generic/Description'
import { FaFacebook, FaMedium, FaMediumM, FaBitcoin, FaEthereum, FaTwitter, FaYoutube } from 'react-icons/fa'


const Footer = () => (
  <Container>
    <div>
        <div className="total-center">
            <HeadFooter>
                <Logo src='public/assets/images/logo-whie.png' alt="logo" />
                <BoxNetwork>
                    <FaFacebook color="#FFF" size="30"/>
                    <FaMediumM color="#FFF" size="30"/>
                    <FaBitcoin color="#FFF" size="30"/>
                    <FaEthereum color="#FFF" size="30"/>
                    <FaTwitter color="#FFF" size="30"/>
                    <FaYoutube color="#FFF" size="30"/>
                </BoxNetwork>
            </HeadFooter>
        </div>
        <div className="total-center">
                <Divider 
                    color="#FFF" 
                    width="90%" 
                />
        </div>
    </div>
    <div className="total-center">
        <WrapperInfo>
            <div>
                <TitleGeneral fontSize="18px" marginBottom="10px" color="#FFF">Resources</TitleGeneral>
                <Description color="#FFF" marginBottom="5px">Documents</Description>
                <Description color="#FFF" marginBottom="5px">Proyect submissions</Description>
                <Description color="#FFF" marginBottom="5px">Website terms of use</Description>
                <Description color="#FFF" marginBottom="5px">ICO terms and conditions</Description>
                <Description color="#FFF" marginBottom="5px">Privacy notice</Description>
            </div>
            <div>
                <TitleGeneral fontSize="18px"  marginBottom="10px" color="#FFF">Navigation</TitleGeneral>
                <Description color="#FFF" marginBottom="5px">Media</Description>
                <Description color="#FFF" marginBottom="5px">Blog</Description>
            </div>
            <div>
                <TitleGeneral fontSize="18px" marginBottom="10px" color="#FFF">Cozumel, Mx</TitleGeneral>
                <Description color="#FFF" marginBottom="5px">Costera 138, Cozunel</Description>
                <TitleGeneral fontSize="18px" marginBottom="10px" color="#FFF" marginTop="20">Hu hang, Thailand</TitleGeneral>
                <Description color="#FFF" marginBottom="5px">Shang hai 13823, Thailand</Description>
            </div>
            <div>
                <TitleGeneral fontSize="18px" marginBottom="10px" color="#FFF">Contact us</TitleGeneral>
                <Description color="#FFF" marginBottom="5px">Support@MBC.com</Description>
                <Description color="#FFF" marginBottom="5px">For marketing inquiries, please contact: marketing@MBC.com</Description>
            </div>
        </WrapperInfo>
    </div>
    <div>
        <Description color="#FFF" textAlign="center" fontSize="14px">2018 Martian Bitcoins Collective Ltd</Description>
    </div>
  </Container>
)
const Container = styled.div`
    width: 100%;
    min-height: 350px;
    background-color: #3B5A6F;
    display: grid;
    grid-template-rows: 90px 1fr 50px;
    align-items: center;
     @media (max-width: 768px){
        grid-template-rows: auto 1fr 50px;
        grid-row-gap: 20px;
    }
`
const HeadFooter = styled.div`
    width: 95%;
    max-width: 1200px;
     min-height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    @media (max-width: 768px){
        padding-bottom: 30px;
        padding-top: 20px;
        display: flex;
        justify-self: center;
        flex-direction: column;
    }
`
const BoxNetwork = styled.div`
    width: 250px;
    display: flex;
    justify-content: space-around;
     @media (max-width: 768px){
         margin: 30px 0px 10px 0px;
         width: 95%;
         max-width: 320px;
     }
`
const Logo = styled.img`
    width: auto;
    height: 65px;
`
const WrapperInfo = styled.div`
    width: 100%;
    max-width: 1100px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    @media (max-width: 768px){
        grid-template-columns: repeat(2,1fr);
        justify-items: center;
        text-align: center;
        grid-row-gap: 30px;
    }
    @media (max-width: 620px){
        grid-template-columns: 1fr;
        justify-items: center;
        text-align: center;
        grid-row-gap: 30px;
    }
`


export default Footer;