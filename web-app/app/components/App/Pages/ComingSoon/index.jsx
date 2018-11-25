import React from 'react'
import { Wrapper, Content, Logo, BrandName, Message, Bg } from './styled'

export default function ComingSoonPage() {
  return (
    <Wrapper>
      <Content>
        <Logo/>
        <BrandName>Martian Bitcoins</BrandName>
        <Message>Our Website is under construction, We'll be here soon to surprise you with the future of crowdfounding</Message>
      </Content>
      <Bg/>
    </Wrapper>
  )
}