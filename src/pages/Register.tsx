/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import styled from 'styled-components';
import { BodyContainer } from 'common/style';
import RegisterForm from 'components/RegisterForm';

const RC = styled(BodyContainer)`
  height: 97.5vh;
`;

function Register() {
  return (
    <RC>
      <RegisterForm />
    </RC>
  );
}

export default Register;
