import styled from 'styled-components';

const label = styled.p`
    height: 100%;
    font-family: 'Raleway', sans-serif;
    font-weight: ${props => props.fontWeight || '400'};
    font-size: ${props => props.fontSize || '16px'};
    color: ${props => props.color || '#575757'};
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    line-height: ${props => props.lineHeight || '25px'};
    text-align: ${props => props.textAlign || 'lef'};
    /* border-bottom-style: solid;
    border-color: ${props => props.borderColor || '#3B5A6F'};
    border-width: ${props => props.borderWidth || '3px'} */
    transition-duration: 0.3s;
    transition-timing-function: ease-out;
    :hover{
        opacity: 0.5;
        cursor: pointer
    }
`

export default label;