import React, { useState } from 'react';
import { MENUS, LOGINS } from 'common/constant';
import { StyledLink } from 'common/style';
import styled from 'styled-components';
import { MdMenu } from 'react-icons/md';

const ALLMENUS = [...MENUS, ...LOGINS];

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

function TabletNavigation() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <MdMenu style={{ zIndex: 5 }} onClick={handleClick} />
      <TabletMenus toggle={toggle}>
        {ALLMENUS.map(menu => (
          <StyledLink to={menu === 'Home' ? '/' : menu}>{menu}</StyledLink>
        ))}
      </TabletMenus>
    </>
  );
}

export default TabletNavigation;
