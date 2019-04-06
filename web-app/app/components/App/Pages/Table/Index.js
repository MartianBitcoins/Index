import React from 'react'
import styled from 'styled-components'
import TableCell from './TableCell'
import Buttom from '../Generic/Buttom'
import { state } from 'cerebral'
import { connect } from '@cerebral/react'


export default connect({
  coinsDetails: state.CoinsDetails
}, function  Table({coinsDetails: { coinDetail } }) {
  return (
    <Container>
      <TableBody>
        <TableCell PrimaryText='Token' SecondaryText={coinDetail.details.token} />
        <TableCell PrimaryText='PreiCO Price' SecondaryText={coinDetail.details.pre_ico_price} />
        <TableCell PrimaryText='Price' SecondaryText={coinDetail.details.price} />
        <TableCell PrimaryText='Bonus' SecondaryText={coinDetail.details.bonus} />
        <TableCell PrimaryText='Bounty' SecondaryText={coinDetail.details.bounty} />
        <TableCell PrimaryText='MVP' SecondaryText={coinDetail.details.mvp} />
        <TableCell PrimaryText='Platform' SecondaryText={coinDetail.details.platform} />
        <TableCell PrimaryText='Accepting' SecondaryText={coinDetail.details.accepting.join(',')} />
        <TableCell PrimaryText='Minimum Investment' SecondaryText={coinDetail.details.minimum_investment} />
        <TableCell PrimaryText='Soft cap' SecondaryText={coinDetail.details.soft_cap}/>
        <TableCell PrimaryText='Hard cap' SecondaryText={coinDetail.details.hard_cap} />

        <TableCell PrimaryText='Country' SecondaryText={coinDetail.details.country} />
        <TableCell PrimaryText='Whitelist' SecondaryText={coinDetail.details.witelist} />
        <TableCell PrimaryText='Resctricd areas' SecondaryText={coinDetail.details.restrictd_areas} />
        <Buttom width='100%' marginTop="10px">More on ICO</Buttom>
      </TableBody>
      <div className="total-center">
        <BoxIcon>
          <Icon src="../public/assets/images/facebook.png" alt="icon" />
          <Icon src="../public/assets/images/twitter.png" alt="icon" />
          <Icon src="../public/assets/images/youtube.png" alt="icon" />
          <Icon src="../public/assets/images/email.png" alt="icon" />
          <Icon src="../public/assets/images/link.png" alt="icon" />
        </BoxIcon>
      </div>

    </Container>
  )
}
)

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
// export default Table;
