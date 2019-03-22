import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;

`

export const Content = styled.div`
  height: 100%;
`

export const SectionOne = styled.div`
  height: 937px;
  width: 100%;
  background-image: url("public/assets/landing-bg-s1.svg");
  background-size: auto 100%;
  background-repeat: no-repeat;
`

export const Header = styled.div`
  height: 130px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const Logo = styled.div`
  background-image: url("public/assets/logo-white.svg");
  background-repeat: no-repeat;
  width: 213px;
  height: 75px;
  margin-top: 30px;
  margin-left: 40px;
`

export const Menu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;
  div {
    color: #FFFFFF;
    margin-right: 40px;
    font-family: 'Raleway', sans-serif;
  }
`

export const InnerSOne = styled.div`
  text-align: center;
  margin-top: 130px;
`

export const ISOneText1 = styled.div`
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 60px;
  font-family: 'Raleway', sans-serif;
  max-width: 793px;
  /* margin: 0 auto; */
`

export const ISOneText2 = styled.div`
  margin-top: 35px;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 15px;
  font-family: 'Raleway', sans-serif;
`

export const ISOneSubmit = styled.div`
  margin: 0 auto;
  margin-top: 19px;
  color: #FFFFFF;
  background: #FF8200;
  width: 218px;
  height: 48px;
  border-radius: 15px;
  font-family: 'Raleway', sans-serif;
  font-size: 21px;
  text-align: center;
  span {
    line-height: 48px;
  }
`

export const SectionTwo = styled.div`
  height: 937px;
  width: 100%;
`

export const S2Title = styled.div`
  font-family: 'Raleway', sans-serif;
  color: #374E69;
  font-size: 28px;
  margin-top: 68px;
  text-align: center;
`

export const S2Text = styled.div`
  font-family: 'Raleway', sans-serif;
  color: #4A4A4A;
  font-size: 18px;
  width: 1140px;
  margin: 0 auto;
  margin-top: 24px;
`

export const S2Content = styled.div`
  width: 1260px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-top: 62px;
`

export const S2Box = styled.div`
  font-family: 'Raleway', sans-serif;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 #9B9B9B;
  font-family: Raleway-Medium;
  height: 374px;
  width: 375px;
  background-image:${props => {
    switch(props.icon) {
      case 'search':
        return 'url("public/icons/search.svg")'
      case 'books':
        return 'url("public/icons/books.svg")'
      case 'success':
        return 'url("public/icons/success.svg")'
      default:
        throw new Error('Icon not found')
    }
  }};
  background-repeat: no-repeat;
  background-size: 102px;
  background-position-x: 50%;
  background-position-y: 40px;

  &::before {
    content: "${props => props.title}";
    color: #4A4A4A;
    font-size: 20px;
    padding-top: 203px;
    display: block;
    text-align: center;
  }
  &::after {
    content: "${props => props.text}";
    color: #4A4A4A;
    font-size: 18px;
    padding-top: 10px;
    width: 321px;
    display: block;
    margin: 0 auto;
  }
`

export const SectionThree = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("public/assets/landing-bg-s3.svg");
  width: 100%;
  height: 280px;
`

export const S3SquaresImg = styled.div`
  margin-right: 60.5px;
  background-image: url("public/assets/3-cubes.svg");
  height: 72px;
  width: 266px;
`

export const S3Text = styled.div`
  font-family: 'Raleway', sans-serif;
  font-size: 38px;
  text-transform: uppercase;
  color: #FFFFFF;
`

export const SectionFour = styled.div`
  display: flex;
  justify-content: space-between;
  height: 1844px;
`

export const S4Left = styled.div`
  border-right: 1px solid #979797;
  width: 310px;
  margin: 80px 0;
  div {
    position: absolute;
    transform: rotate(270deg) translate(-922px, 0);
    font-family: Raleway-Medium;
    font-size: 72px;
    color: #374E69;
    letter-spacing: 0;
    text-align: center;
  }
`

export const S4Right = styled.div`
  padding-right: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 80px 0;
`

export const S4Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 241px;
  width: 750px;
  background-image: ${props => {
    switch(props.icon) {
      case 'website':
        return 'url("public/icons/website.svg")'
      case 'grades-search':
        return 'url("public/icons/grades-search.svg")'
      case 'planning':
        return 'url("public/icons/planning.svg")'
      case 'presentation':
        return 'url("public/icons/presentation.svg")'
      case 'premium-list':
        return 'url("public/icons/premium-list.svg")'
      default:
        throw new Error('Icon not found')
    }
  }};
  background-repeat: no-repeat;
  background-size: 167px 160px;
  background-position-x: 0;
  background-position-y: 0;
  &::before {
    content: "${props => props.title}";
    font-family: Raleway-SemiBold;
    color: #4A4A4A;
    font-size: 18px;
    display: block;
    width: 423px;
    line-height: 39px;
    letter-spacing: 0;
  }
  &::after {
    content: "${props => props.text}";
    font-family: 'Raleway', sans-serif;
    color: #4A4A4A;
    font-size: 18px;
    display: block;
    width: 423px;
    line-height: 39px;
    letter-spacing: 0;
  }
`

export const SectionFive = styled.div`
  background: #F7F7F7;
  height: 538px;
`

export const S5Title = styled.div`
  padding-top: 50px;
  height: 49px;
  font-family: Raleway-Medium;
  font-size: 42px;
  color: #374E69;
  letter-spacing: 0.34px;
  text-align: center;
`

export const S5Content = styled.div`
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  margin: 0 154px;
`

export const S5MemberBox = styled.div`
  background: #FFFFFF;
  box-shadow: 0 2px 5px 0 #4A4A4A;
  width: 237px;
  height: 349px;
  text-align: center;

  img {
    border-radius: 50%;
    margin-top: 22px;
    width: 140px;
    height: 140px;
  }

  div {
    :nth-child(2) {
      padding-top: 12.5px;
      font-family: Raleway-SemiBold;
      font-size: 17px;
      color: #4A4A4A;
      letter-spacing: 0.75px;
      /* text-align: center; */
    }

    :nth-child(3) {
      padding-top: 8px;
      font-family: Raleway-Regular;
      font-size: 15px;
      color: #374E69;
      letter-spacing: 0.29px;
      text-align: center;
    }

    :nth-child(4) {
      padding: 14px 2px 0 2px;
      font-family: Raleway-Regular;
      font-size: 14px;
      color: #4A4A4A;
      letter-spacing: 0.62px;
      text-align: center;
    }
  }
`

export const SectionSix = styled.div`
  height: 1786px;
`

export const S6Title = styled.div`
  font-family: Raleway-Medium;
  font-size: 42px;
  color: #374E69;
  letter-spacing: 0;
  text-align: center;
  height: 49px;
  padding-top: 80px;
`

export const S6RoadMap = styled.div`
  height: 1513px;
  margin-top: 63.5px;
  background-image: url('/public/assets/roadmap.svg');
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 0;
  background-size:757px 1513px;
`

export const SectionSeven = styled.div`
  background: #F7F7F7;
  height: 690px;
`

export const S7Title = styled.div`
  height: 45px;
  text-align: center;
  padding-top: 50px;
  font-family: Raleway-Regular;
  font-size: 38px;
  color: #000000;
  letter-spacing: 0;
`

export const S7Content = styled.div`
  margin-top: 71px;
  display: flex;
  justify-content: space-between;
  padding: 0 173px;
`

export const S7BlogBox = styled.div`
  width: 300px;

  img {
    width: 287px;
    height: 300px;
  }

  div:nth-child(2) {
    font-family: Raleway-Regular;
    font-size: 18px;
    color: #000000;
    letter-spacing: -0.79px;
    margin-top: 21px
  }

  div:nth-child(3) {
    font-family: Raleway-Regular;
    font-size: 17px;
    color: #9B9B9B;
    line-height: 18px;
    margin-top: 10px;
    height: 54px;
  }

  a {
    display: block;
    margin-top: 12px;
    text-decoration: none;
    font-family: Raleway-SemiBold;
    font-size: 14px;
    color: #000000;
    text-align: left;
  }
`