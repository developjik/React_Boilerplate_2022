import React from 'react';
import styled from 'styled-components';

const FC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.5vh;
  color: #ccc;
  font-size: 0.75rem;
`;

function Footer() {
  return <FC>Copyright © developjik . All rights reserved.</FC>;
}

export default Footer;
