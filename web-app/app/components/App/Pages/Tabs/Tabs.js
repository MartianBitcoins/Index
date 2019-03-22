import styled from 'styled-components';

const Tabs = styled.div`    
    background-color: ${props => props.BackgroundColor};
    width: ${props => props.width || '100%'};
    max-width: ${props => props.maxWidth};
    min-height:  50px;
    display: flex;
    justify-content: ${props => props.justifyContent || 'space-around'};
    align-items: ${props => props.alignItems || 'center'};
    border-bottom-style: solid;
    border-color: ${props => props.borderColor || '#3B5A6F'};
    border-width: ${props => props.borderWidth || '1px'};
`

export default Tabs;