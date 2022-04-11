import React, { useState } from 'react';

import { useRecoilValue, useResetRecoilState } from 'recoil';
import { userStore } from 'store/user';

import { StyledLink } from 'common/style';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';

import { MENUS, LOGINS, LOGOUT } from 'common/constant';
import { ThemeInterface } from 'common/interface';

const TabletMenus = styled.div<{ toggle: boolean }>`
  position: absolute;
  left: ${({ toggle }) => (toggle ? '0' : '100vw')};
  top: 0;
  transition: 0.25s;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #bbb;
`;

const LogOutBtn = styled.button`
  background: ${({ theme }: { theme: ThemeInterface }) => theme.text};
  color: ${({ theme }: { theme: ThemeInterface }) => theme.bg};
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 0.25em;
`;

function TabletNavigation() {
  const [toggle, setToggle] = useState(false);

  const user = useRecoilValue(userStore);
  const setUserLogOut = useResetRecoilState(userStore);

  const handleClick = () => {
    setToggle(!toggle);
  };

  const onClickLogout = () => {
    setUserLogOut();
    handleClick();
  };

  return (
    <>
      <MdMenu style={{ zIndex: 5 }} onClick={handleClick} />
      <TabletMenus toggle={toggle}>
        {MENUS.map(menu => (
          <StyledLink
            key={menu}
            to={menu === 'Home' ? '/' : menu}
            onClick={handleClick}
          >
            {menu}
          </StyledLink>
        ))}

        {JSON.stringify(user) !== JSON.stringify({}) ? (
          <LogOutBtn type="button" onClick={onClickLogout}>
            {LOGOUT}
          </LogOutBtn>
        ) : (
          <>
            {LOGINS.map(menu => (
              <StyledLink key={menu} to={menu} onClick={handleClick}>
                {menu}
              </StyledLink>
            ))}
          </>
        )}
      </TabletMenus>
    </>
  );
}

export default TabletNavigation;
