import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from 'common/style';

const MC = styled(BodyContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
`;

function More() {
  return <MC>More</MC>;
}

export default More;
