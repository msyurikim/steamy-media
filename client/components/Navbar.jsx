import React from 'react';
import {
  NavHeader, NavList, NavItem, MainLogo, LogoContainer, DlButton, NavContent, NavLogin, NavFunction,
} from '../StyledComponents.jsx';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <NavHeader>
        <span />
        <NavContent>
          <LogoContainer>
            <MainLogo src="https://steamstore-a.akamaihd.net/public/shared/images/header/globalheader_logo.png?t=962016" alt="Steam Logo" />
          </LogoContainer>
          <NavList>
            <NavItem>STORE</NavItem>
            <NavItem>COMMUNITY</NavItem>
            <NavItem>ABOUT</NavItem>
            <NavItem>SUPPORT</NavItem>
          </NavList>
          <NavFunction>
            <DlButton>Install Steam</DlButton>
            <NavLogin>login</NavLogin>
            &nbsp;|&nbsp;
            <NavLogin>language</NavLogin>
          </NavFunction>
        </NavContent>
        <span />
      </NavHeader>
    );
  }
}

export default Navbar;
