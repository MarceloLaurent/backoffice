import { useNavigate } from "react-router-dom";

import { Button } from "../Button";

import { Container, Wrapper, Row, Menu, MenuRight } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  const handleClickSignIn = () => {
    navigate("/login");
  };

  const handleClickSignUp = () => {
    navigate("/signup");
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <>
            <Menu>Backoffice&reg;</Menu>
          </>
        </Row>
        <Row>
          <>
            <MenuRight href="/">Inicio</MenuRight>
            <Button title="Entrar" onClick={handleClickSignIn}/>
            <Button title="Cadastrar" onClick={handleClickSignUp}/>
          </>
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
