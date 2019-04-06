import styled from 'styled-components';

const Divider = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '1px'};
  background-color: ${props => props.color || '#575757'};
  margin-top: ${props => props.marginTop};
  margin-bottom: ${props => props.marginBottom};
`;

export default Divider;