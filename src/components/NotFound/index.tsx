import React from 'react';
import styled from 'styled-components';
import { StyledLink } from 'common/style';
import { ThemeInterface } from 'common/interface';

const NC = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 97.5vh;
`;

const HomeBtn = styled(StyledLink)`
  padding: 0.75em;
  margin-top: 1em;
  border-radius: 1em;
  background: ${({ theme }: { theme: ThemeInterface }) => theme.text};
  color: ${({ theme }: { theme: ThemeInterface }) => theme.bg};
`;

function NotFound() {
  return (
    <NC>
      <h1>404</h1>
      <h3>Page Not Found...</h3>
      <HomeBtn to="/">Back to Home</HomeBtn>
    </NC>
  );
}

export default NotFound;
