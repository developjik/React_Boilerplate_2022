import React, { useState } from 'react';
import { MENUS, LOGINS } from 'common/constant';
import { Link } from 'common/style';
import styled from 'styled-components';

const menuImg = require('../../assets/imgs/menu.png');

const ALLMENUS = [...MENUS, ...LOGINS];

const TabletToggle = styled.div`
  background-image: url(${menuImg});
  cursor: pointer;
  width: 1em;
  height: 1em;
  z-index: 1;
  @media (min-width: 1024px) {
    display: none;
  }
`;

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
      <TabletToggle onClick={handleClick} />
      <TabletMenus toggle={toggle}>
        {ALLMENUS.map(menu => (
          <Link key={menu} href="/" style={{ color: '#fff' }}>
            {menu}
          </Link>
        ))}
      </TabletMenus>
    </>
  );
}

export default TabletNavigation;
