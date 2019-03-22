import styled from 'styled-components';

const Buttom = styled.p`
  background-color: ${props => props.backgroundColor || '#3B5A6F'};
  width: ${props => props.width || '200px'};
  height: ${props => props.height || '30px'};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: ${props => props.fontWeight || '800'};
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || '#FFF'};
  margin-top: ${props => props.marginTop };
  margin-bottom: ${props => props.marginBottom};
  line-height: ${props => props.lineHeight || '25px'};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  :hover{
    opacity: .8
  }
`;

export default Buttom;