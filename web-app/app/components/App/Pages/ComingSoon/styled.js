import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
`

const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Logo = styled.div`
  background-image: url("public/assets/logo-white.svg");
  width: 199px;
  height: 200px;
`

const BrandName = styled.div`
  font-family: Helvetica, sans-serif;
  font-size: 100px;
  color: white;
  text-transform: uppercase;
  padding-top: 2rem;
`

const Message = styled.div`
  font-family: Helvetica, sans-serif;
  max-width: 700px;
  font-weight: 100;
  font-size: 20px;
  color: white;
  text-align: center;
`

const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("public/assets/coming-soon-bg.svg");
  z-index: -1;
`

export { Wrapper, Content, Logo, BrandName, Message, Bg }