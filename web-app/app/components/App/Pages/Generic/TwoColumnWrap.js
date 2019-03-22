import styled from 'styled-components';

const TwoColumnWrap = styled.div`
  width: 100%;
  max-width: ${props => props.maxWidth || '1200px' };
  height: ${props => props.display || 'auto' };
  display: grid;
  grid-template-columns: ${props => props.sizeColumns || '1.5fr 1fr' };
  grid-gap: ${props => props.gap || '20px' };
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
  @media (max-width: 992px){
      grid-template-columns: 1fr;
  }
`;

export default TwoColumnWrap;