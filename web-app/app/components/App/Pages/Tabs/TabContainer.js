import styled from 'styled-components';

const label = styled.div`
    height: 100%;
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxWidth}
`

export default label;