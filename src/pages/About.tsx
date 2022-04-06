import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from 'common/style';

const AC = styled(BodyContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
`;

function About() {
  return <AC>About</AC>;
}

export default About;
