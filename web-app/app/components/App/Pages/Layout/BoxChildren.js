import styled from 'styled-components';

const BoxChildren = styled.div `
    width: ${props => props.width || '100%'};
    min-height: ${props => props.minHeigth || '50vh'};
    padding-bottom: 50px;
`

export default BoxChildren;