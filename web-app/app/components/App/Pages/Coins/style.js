
import styled from 'styled-components'

export const WrapperText = styled.div`
width: calc(100% - 30px );
max-width: 1000px;
min-height: 100px;
@media (max-width: 992px){
    padding-left: 15px;
    padding-right: 15px
}
`

export const Img = styled.img`
width: 100%;
height: 400px;
object-fit: cover
`

export const GridDescription = styled.div`
width: 100%;
max-width: 1200px;
height: auto;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
margin-top: 40px;
margin-bottom: 50px;
@media(max-width: 1080px){
    grid-template-columns: 1fr;
}
`

export const BoxInfo = styled.div`
width: 100%;
min-height: 350px;
display: grid;
grid-template-columns: 1fr 1fr;
justify-items: center;
align-items: center
`

export const WrapperLine =styled.div`
border: solid 0.5px #3B5A6F;
width: 130px;
height: 160px;
border-radius: 10px;
display: flex; 
justify-content: center;
align-items: center;
flex-direction: column
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto 300px auto
`

export const BoxTargets = styled.div`
    width:100%;
    max-width:1400px;
    height:auto;
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap:15px;
    padding:20px;
    margin-bottom:15px;
`
export const BoxCategories = styled.div`
    width: 200px;
    height:25px;
`
export const FixBrowser = styled.div`
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
export const OptionsBrowser = styled.div`
    width:100%;
    min-height: 90px;
    display:flex;
    justify-content:center;
    align-items:center
`
export const SearchContainer = styled.div`
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
export const InputBrowser = styled.input`
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
export const InputBox = styled.div`
    width: 90%;;
    height:auto;
    justify-content:center;
    align-items:center;
    display:flex;
`
export const BrowserHeader = styled.div`
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
