import React from 'react';
import styled from 'styled-components';
import { MENUS, LOGINS } from 'common/constant';

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  padding: 2.5vh 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const Link = styled.a`
  text-decoration: none;
  color: #000;
`;

const Logo = styled.div``;

const NavItems = styled.ul`
  display: flex;
  border: 1px solid #eee;
  list-style: none;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavItem = styled.li`
  & + & {
    margin-left: 1em;
  }
`;

const MobileMenu = styled.div`
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
`;

function Navigation() {
  return (
    <Navbar>
      <Logo>
        <Link href="/">LOGO</Link>
      </Logo>
      <NavItems>
        {MENUS.map(menu => (
          <NavItem key={menu}>
            <Link href="/">{menu}</Link>
          </NavItem>
        ))}
      </NavItems>
      <NavItems>
        {LOGINS.map(login => (
          <NavItem key={login}>
            <Link href="/">{login}</Link>
          </NavItem>
        ))}
      </NavItems>
      <MobileMenu>menu</MobileMenu>
    </Navbar>
  );
}

export default Navigation;
