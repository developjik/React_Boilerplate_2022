/* eslint object-curly-newline: ["error", "never"] */
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }: { theme: any }) => theme.text};
  font-size: 0.9em;
`;

const BodyContainer = styled.div`
  padding-top: 5vh;
  min-height: 97.5vh;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input.attrs(({ type }) => ({ type: type || 'text' }))`
  width: 20%;
  min-width: 200px;
  padding: 2% 1.5%;
  border-radius: 1em;
  border-style: ${({ type }) => (type === 'submit' ? 'solid' : 'none')};
  & + & {
    margin-top: 1em;
  }
`;

export { StyledLink, BodyContainer, Form, Input };
