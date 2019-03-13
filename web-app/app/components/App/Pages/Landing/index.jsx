import React from 'react'
import {
  Wrapper,
  Content,
  SectionOne,
  Header,
  Logo,
  Menu,
  InnerSOne,
  ISOneText1,
  ISOneText2,
  ISOneSubmit,
  SectionTwo,
  S2Title,
  S2Text,
  S2Content,
  S2Box,
  SectionThree,
  S3SquaresImg,
  S3Text,
  SectionFour,
  S4Left,
  S4Right,
  S4Box,
  SectionFive,
  S5Title,
  S5Content,
  S5MemberBox,
  SectionSix,
  S6Title,
  S6RoadMap,
  SectionSeven,
  S7Title,
  S7Content,
  S7BlogBox,
} from './styled'
import Footer from '../../../General/Footer'

export default function Landing() {
  return (
    <Wrapper>
      <Content>
        <SectionOne>
          <Header>
            <Logo />
            <Menu>
              <div>Who we are</div>
              <div>How we work</div>
              <div>Blog</div>
              <div>One pager</div>
            </Menu>
          </Header>
          <InnerSOne>
            <ISOneText1>Building--- the Blockchain Revolution</ISOneText1>
            <ISOneText2>Descentralized Investment Done Right</ISOneText2>
            <ISOneSubmit><span>Submit Your Project</span></ISOneSubmit>
          </InnerSOne>
        </SectionOne>

        <SectionTwo>
          <S2Title>
            What is Martian Bitcoins?
          </S2Title>
          <S2Text>
            Martian Bitcoins is creating a platform for decentralized investment projects that provides a healthy environment for project creators and project investors free of scams and easy to use. We maintain a listing of thoroughly reviewed crowdfunding projects and provide our expertise for entrepreneurs that want to take the next step in decentralized investment and succeed.
            You will find Initial Coin Offerings, Security Tokens and Crowdfunding projects that the world can trust apart from a lot of educative information and free tools for the general public.
          </S2Text>
          <S2Content>
            <S2Box
              icon="search"
              title="TRANSPARENCY/QUALITY"
              text="Projects in our platform will meet all requirements in our open source qualification framework and be evaluated by our human expert team."
            />
            <S2Box
              icon="books"
              title="EDUCATION"
              text="Our platform will be filled with information, news, tools and educational content to make experts on the field and let them spread their wings."
            />
            <S2Box
              icon="success"
              title="SUCCESS"
              text="Our campaign creator will allow users to create their investment strategies using the best standardized smart contracts practices and scam protection. Along our review system and support of our experts, team success will increase."
            />
          </S2Content>
        </SectionTwo>
        <SectionThree>
          <S3SquaresImg/>
          <S3Text>Blockchain Transparency</S3Text>
        </SectionThree>
        <SectionFour>
          <S4Left>
            <div>How we work</div>
          </S4Left>
          <S4Right>
            <S4Box
              icon="website"
              title="Martian Bitcoins Index"
              text="We maintain a listing of thoroughly reviewed Initial Coin Offerings, Security Tokens and Crowdfunding projects."
            />
            <S4Box
              icon="grades-search"
              title="Review Framework"
              text="Our review system it’s constituted of a very strict requirements list in order to be accepted in the platform, follow by the evaluation done by our human experts team giving a rating, all of this in a video to make your life easier."
            />
            <S4Box
              icon="planning"
              title="Project Creator"
              text="Our project wizard will guide you through the process of creating a quality and compliant with regulations ICO or STO without programming, after your project is created our team will review it manually."
            />
            <S4Box
              icon="presentation"
              title="Expert Advisory"
              text="Our team is conformed by experts on several fields we consider are needed for projects to be successful. Who are always available for campaing creators."
            />
            <S4Box
              icon="premium-list"
              title="Premium Listing"
              text="We offer the opportunity for your project to appear on the first page so more people can have a look at it! (keep in mind rating is impartial and independent of this)."
            />
          </S4Right>
        </SectionFour>
        <SectionFive>
          <S5Title>Meet the team</S5Title>
          <S5Content>
            <S5MemberBox>
              <img src="public/assets/ruben.jpg"></img>
              <div>Ruben Alcazar</div>
              <div>CFO Co - Founder</div>
              <div>Entrepreneur and software developer, passionate about crypto, with experience in almost a dosen project in the course of +10 years.</div>
            </S5MemberBox>
            <S5MemberBox>
              <img src="public/assets/karla.jpg"></img>
              <div>Karla Andrea Alcazar Alvarez </div>
              <div>CEO Co - founder</div>
              <div>Entrepreneur and designer, passionate about decentralized project creation, experience on UX design.</div>
            </S5MemberBox>
            <S5MemberBox>
              <img src="public/assets/carlos.jpg"></img>
              <div>Carlos Noveron </div>
              <div>Smart Contract Developer Co - Founder</div>
              <div>Smart Contract developer previously worked in a virtual exchange company, intrested in law and politics.</div>
            </S5MemberBox>
            <S5MemberBox>
              <img src="public/assets/ismael.jpg"></img>
              <div>Ismael Cantu</div>
              <div>CMO</div>
              <div>Block chain enthusiast. Co founded a bitcoin based internet company and became a Certified Bitcoin Professional.</div>
            </S5MemberBox>
          </S5Content>
        </SectionFive>
        <SectionSix>
          <S6Title>Road Map</S6Title>
          <S6RoadMap/>
        </SectionSix>
        <SectionSeven>
          <S7Title>From the Blog</S7Title>
          <S7Content>
            <S7BlogBox>
              <img src="public/assets/blog-1.png"></img>
              <div>Weclome to Martian Bitcoins blog</div>
              <div>Welcome to martian bitcoins blog, for those of you that don't know us, Martian Bitcoins is a…</div>
              <a href="https://blog.martianbitcoins.com/welcome-to-martian-bitcoins/">READ NOW ></a>
            </S7BlogBox>
            <S7BlogBox>
              <img src="public/assets/blog-2.png"></img>
              <div>About us</div>
              <div>We wanted to do something original and significant for the world, we don't like how the system works…</div>
              <a href="https://blog.martianbitcoins.com/about-us/">READ NOW ></a>
            </S7BlogBox>
            <S7BlogBox>
              <img src="public/assets/blog-3.png"></img>
              <div>Wait for it!</div>
              <div>We are preparing our next posts, trust us you are going to love it!</div>
              <a href="https://blog.martianbitcoins.com/">READ NOW ></a>
            </S7BlogBox>
          </S7Content>
        </SectionSeven>
        <Footer/>
      </Content>
    </Wrapper>
  )
}
