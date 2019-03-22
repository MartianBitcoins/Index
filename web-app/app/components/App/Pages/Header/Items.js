import styled from 'styled-components';

const Items = styled.p`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Cardo', serif;
  font-weight: bold;
  font-size: 18px;
  color: #B5B5B5;
  text-align: center;
  :hover{
    opacity: 0.8px
  }
  @media (max-width: 992px){
  font-size: 14px;

  }
`;

export default Items;