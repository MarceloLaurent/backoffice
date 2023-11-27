import { Container, Wrapper, Row, Menu, MenuRight } from "./styles";

const Logado = () => {
  
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
            <MenuRight href="/products">Produtos</MenuRight>
            <MenuRight href="/types">Tipos</MenuRight>
            <MenuRight href="/product">Cadastrar Produto</MenuRight>
            <MenuRight href="/type">Cadastrar Tipo</MenuRight>
            <MenuRight href="/">Sair</MenuRight>
          </>
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Logado };
