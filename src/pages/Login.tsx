/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import styled from 'styled-components';
import { BodyContainer } from 'common/style';
import LoginForm from 'components/LoginForm';

const LC = styled(BodyContainer)`
  height: 97.5vh;
`;

function Login() {
  return (
    <LC>
      <LoginForm />
    </LC>
  );
}

export default Login;
