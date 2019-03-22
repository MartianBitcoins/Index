
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