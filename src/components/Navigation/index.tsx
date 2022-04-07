/* eslint-disable import/no-unresolved */
import React from 'react';
import { useMediaQuery } from 'usehooks-ts';
import styled from 'styled-components';
import { StyledLink } from 'common/style';
import TabletNavigation from 'components/Navigation/TabletNavigation';
import DesktopNavigation from 'components/Navigation/DesktopNavigation';

const Navbar = styled.nav`
  position: fixed;
  width: 100%;
  padding: 2.5vh 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
`;

const Logo = styled.div``;

function Navigation() {
  const matches = useMediaQuery('(min-width: 1024px)');

  return (
    <Navbar>
      <Logo>
        <StyledLink to="/" style={{ fontSize: '1em' }}>
          LOGO
        </StyledLink>
      </Logo>
      {matches ? <DesktopNavigation /> : <TabletNavigation />}
    </Navbar>
  );
}

export default Navigation;
