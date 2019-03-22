import React from 'react';
import styled from 'styled-components';
import TableCell from './TableCell';
import Buttom from '../Generic/Buttom';

const Table = () => (
    <Container>
        <TableBody>
            <TableCell PrimaryText='Token' SecondaryText='CHI' />
            <TableCell PrimaryText='PreiCO Price' SecondaryText='1 CHI = 0.00013 BTC' />
            <TableCell PrimaryText='Price' SecondaryText='1 CHI = 0.00020 BTC' />
            <TableCell PrimaryText='Bonus' SecondaryText='Available' />
            <TableCell PrimaryText='Bounty' SecondaryText='Available' />
            <TableCell PrimaryText='MVP' SecondaryText='Available' />
            <TableCell PrimaryText='Platfrom' SecondaryText='GourmetRed' />
            <TableCell PrimaryText='Accepting' SecondaryText='BTC, ETC, BCH, QASH' />
            <TableCell PrimaryText='Minimum Investment' SecondaryText='50 USD' />
            <TableCell PrimaryText='Soft cap' SecondaryText='250 BTC'/>
            <TableCell PrimaryText='Hard cap' SecondaryText='2,200 BTC' />
            <TableCell PrimaryText='Country' SecondaryText='England' />
            <TableCell PrimaryText='Whitelist' SecondaryText='KYC' />
            <TableCell PrimaryText='Resctricd areas' SecondaryText='China' />
            <Buttom width='100%' marginTop="10px">More on ICO</Buttom>
        </TableBody>
        <div className="total-center">
            <BoxIcon>
                <Icon src="public/assets/images/facebook.png" alt="icon" />
                <Icon src="public/assets/images/twitter.png" alt="icon" />
                <Icon src="public/assets/images/youtube.png" alt="icon" />
                <Icon src="public/assets/images/email.png" alt="icon" />
                <Icon src="public/assets/images/link.png" alt="icon" />
            </BoxIcon>
        </div>      

    </Container>
);

const Container = styled.div`
    width: 100%;
    max-width: ${props => props.maxWidth || '320px'};
`

const TableBody = styled.div`
    width: 100%;
    min-height: 50px;
    display: grid;
    grid-auto-rows: 35px;
    grid-row-gap: 10px;
    align-items: center;
    padding: 15px;
    border: solid 1px #3B5A6F;

`

const BoxIcon = styled.div`
    width: 200px;
    height: 50px;
    display: flex; 
    justify-content: space-between;
    align-items: center
`

const Icon = styled.img`
    width: auto;
    height: 20px;
`
export default Table;