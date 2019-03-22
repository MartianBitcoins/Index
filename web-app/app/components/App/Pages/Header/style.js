import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    justify-content: center;
    grid-column-gap: 10px;
    align-items: center;
    justify-items: center;
    @media (max-width: 1366px){
        grid-template-columns: 0.5fr 4fr 1fr;
    }
    @media (max-width: 1200px){
        grid-template-columns: 4fr 1fr;
    }
    @media (max-width: 768px){
        grid-template-columns: 2fr 1fr 60px; 
    }
`
export const BoxInfo = styled.div`
    width: 100%;
    max-width: 900px;
    min-height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    grid-column: 2 / 3;
    @media (max-width: 1366px){
        max-width: 800px;
    }
    @media (max-width: 1200px){
        max-width: 750px;
        grid-column: 1 / 2;
    }
    @media (max-width: 768px){
        display: none
    }

`
export const Logo = styled.img`
    width: auto;
    height: 80px;
    @media(max-width: 992px){
           width: auto;
            height: 40px;
    }
    @media (max-width: 768px){
        display: none
    }
`

export const LogoResponsive = styled.img`
    display: none;
    @media (max-width: 768px){
        width: auto;
        height: 60px;
        display: inline-block;
        display: inline-block;
        justify-self: start;
        margin-left: 50px;
    }
`

export const ButtonProyect = styled.div`
    width: 180px;
    border: solid 0.5px #75767A;
    padding: 10px 10px;
    border-radius: 10px;
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: bold;
    font-size: 16px;
    color: #B5B5B5;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover{
        background-color: #75767A;
        color: #FFF;
    }
    @media(max-width: 992px){
        width: 140px;
        height: 20px;
        font-size: 14px;
        padding: 7px
    }
`

export const MenuResponisve = styled.div`
    display: none;
    text-align: center;

    @media (max-width: 768px){
        display: inline-block
    } 
`