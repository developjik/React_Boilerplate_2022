import React from 'react';
import styled from 'styled-components';
import { BodyContainer } from 'common/style';

const LC = styled(BodyContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 97.5vh;
`;

function Login() {
  return <LC>Login</LC>;
}

export default Login;
