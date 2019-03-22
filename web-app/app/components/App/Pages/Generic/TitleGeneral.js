import styled from 'styled-components';

const TitleGeneral = styled.p`
  font-family: ${ props => props.fontFamily || 'Open Sans' }, sans-serif;
  font-weight: ${props => props.fontWeight || '800'};
  font-size: ${props => props.fontSize || '22px'};
  color: ${props => props.color || '#161616'};
  margin-top: ${props => props.marginTop };
  margin-bottom: ${props => props.marginBottom};

`;

export default TitleGeneral;