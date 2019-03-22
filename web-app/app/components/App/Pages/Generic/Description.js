import styled from 'styled-components';

const Description = styled.p`
  font-family: 'Raleway', sans-serif;
  font-weight: ${props => props.fontWeight || '400'};
  font-size: ${props => props.fontSize || '16px'};
  color: ${props => props.color || '#575757'};
  margin-top: ${props => props.marginTop };
  margin-bottom: ${props => props.marginBottom};
  line-height: ${props => props.lineHeight || '25px'};
  text-align: ${props => props.textAlign || 'lef'}
`

export default Description;