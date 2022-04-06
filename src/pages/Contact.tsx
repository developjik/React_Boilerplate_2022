import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from 'common/style';

const CC = styled(BodyContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
`;

function Contact() {
  return <CC>Contact</CC>;
}

export default Contact;
