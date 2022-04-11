import React from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userStore } from 'store/user';

import { MENUS, LOGINS, LOGOUT } from 'common/constant';
import { StyledLink } from 'common/style';
import styled from 'styled-components';

const NavItems = styled.ul`
  display: flex;
  list-style: none;
  cursor: pointer;

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
  const user = useRecoilValue(userStore);
  const setUserLogOut = useResetRecoilState(userStore);

  return (
    <>
      <NavItems>
        {MENUS.map(menu => (
          <NavItem key={menu} style={{ margin: '0 5vh' }}>
            <StyledLink to={menu === 'Home' ? '/' : menu}>{menu}</StyledLink>
          </NavItem>
        ))}
      </NavItems>
      <NavItems>
        {JSON.stringify(user) !== JSON.stringify({}) ? (
          <>
            <NavItem>{`${user.name} 님 `}</NavItem>
            <NavItem onClick={setUserLogOut}>{LOGOUT}</NavItem>
          </>
        ) : (
          <>
            {LOGINS.map(login => (
              <NavItem key={login}>
                <StyledLink to={login}>{login}</StyledLink>
              </NavItem>
            ))}
          </>
        )}
      </NavItems>
    </>
  );
}

export default DesktopNavigation;
