import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from 'common/style';

const HC = styled(BodyContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
`;

function Home() {
  return <HC>Home</HC>;
}

export default Home;
