import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from 'common/style';

const RC = styled(BodyContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
`;

function Register() {
  return <RC>Register</RC>;
}

export default Register;
