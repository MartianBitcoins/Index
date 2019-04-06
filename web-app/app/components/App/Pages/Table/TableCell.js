import React from 'react';
import styled from 'styled-components';
import Description from '../Generic/Description';
import TitleGeneral from '../Generic/TitleGeneral';

const TableCell = (props) => (
    <Wrapper>
        <Description fontSize="14px">{props.PrimaryText}</Description>
        <TitleGeneral fontSize="14px">{props.SecondaryText}</TitleGeneral>
    </Wrapper>
);

const Wrapper = styled.div`
    width: 100%;
    max-width: ${props => props.maxWidth || '420px'};
    min-height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center
`
export default TableCell;
