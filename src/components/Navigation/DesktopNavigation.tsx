import React from 'react';
import { MENUS, LOGINS } from 'common/constant';
import { Link } from 'common/style';
import styled from 'styled-components';

const NavItems = styled.ul`
  display: flex;
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

function DesktopNavigation() {
  return (
    <>
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
    </>
  );
}

export default DesktopNavigation;
