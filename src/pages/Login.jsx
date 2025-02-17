import styled from "styled-components";
import LoginForm from "../ui/LoginForm";
import Logo from "../ui/Logo";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 2.8rem;

  & h1,
  & h2 {
    text-align: center;
  }
`;

const Heading = styled.h1`
  font-weight: 100;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading>LOG IN</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
