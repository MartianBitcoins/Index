import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { MdMenu } from 'react-icons/md'
import { Container, BoxInfo, Logo, LogoResponsive, ButtonProyect, MenuResponisve } from './style'
import Items from './Items'


import { state as Cstate } from 'cerebral'
import { connect } from '@cerebral/react'


export default connect({
  currentP: Cstate.currentPage
}, class Header extends React.Component {
    state = {
      anchorEl: null
    }

    handleClick = event => {
      this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
      this.setState({ anchorEl: null })
    }
    render() {
      const { anchorEl } = this.state
      let logo = (this.props.currentP == 'Coins') ? 'public/assets/images/logoResponsive.png' : '../public/assets/images/logoResponsive.png'
      return (
        <Container>
          <LogoResponsive src={logo} alt="logoMain" />
          <BoxInfo>
            <Items>Whitepaper</Items>
            <Items>Documents</Items>
            <Logo src={logo} alt="logoMain" />
            <Items>Proyects</Items>
            <Items>How it works</Items>
          </BoxInfo>
          <div>
            <ButtonProyect >
                        Submit your Proyects
            </ButtonProyect>
          </div>
          <MenuResponisve>
            <MdMenu size={30} color="#3B5A6F" style={{ cursor: 'pointer' }}
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup="true"
              onClick={this.handleClick}
            />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Whitepaper</MenuItem>
              <MenuItem onClick={this.handleClose}>Documents</MenuItem>
              <MenuItem onClick={this.handleClose}>Proyects</MenuItem>
              <MenuItem onClick={this.handleClose}>How it works</MenuItem>
            </Menu>
          </MenuResponisve>
        </Container>
      )
    }
})

// export default Header
