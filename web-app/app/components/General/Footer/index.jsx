import React from 'react'
import {
  Wrapper,
  Social,
  Logo,
  Icons,
  Icon,
  Links,
  Col,
  Title,
  Link,
  Text,
  Mark,
} from './styled'

export default function Footer() {
  return (
    <Wrapper>
      <Social>
        <Logo/>
        <Icons>
          <Icon width="41px" height="41px" src="public/icons/facebook.svg"/>
          <Icon width="41px" height="36px" src="public/icons/medium.svg"/>
          <Icon width="28px" height="38px" src="public/icons/bitcoin.svg"/>
          <Icon width="49px" height="40px" src="public/icons/ethereum.svg"/>
          <Icon width="41px" height="41px" src="public/icons/twitter.svg"/>
          <Icon width="44px" height="33px" src="public/icons/youtube.svg"/>
        </Icons>
      </Social>
      <Links>
        <Col>
          <Title>Resources</Title>
          <Link href="#">Documents</Link>
          <Link href="#">Project Submissions</Link>
        </Col>
        <Col>
          <Title>Navigation</Title>
          <Link href="#">Blog</Link>
        </Col>
        <Col>
          <Title>Cozumel, Mx</Title>
          <Text>Costera 138, Cozumel</Text>
        </Col>
        <Col>
          <Title>Contact Us</Title>
          <Link href="#">Contact@martianbitcoins.com</Link>
          <Text>For marketing inquiries, please contact:
            marketing@martianbitcoins.com</Text>
        </Col>
      </Links>
      <Mark>© 2018 Martian Bitcoins Collective Ltd</Mark>
    </Wrapper>
  )
}