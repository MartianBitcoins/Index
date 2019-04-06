import styled from 'styled-components';

const BoxProgress = styled.p`
    width: ${ props => props.width || '100% '};
    height: 6px;
    border: solid 0.5px #cacaca;
`;

export default BoxProgress;