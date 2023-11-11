import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from "react-hook-form";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import {
  Container,
  Wrapper,
  Title,
  Row,
  EsqueciText,
  CriarText,
} from "./styles";

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const onSubmit = async (formData) => {
    try {
      const { data } = await api.get(`/clientes`);

      for (let i = 0; i < data.length; i++) {
        if (
          data[i].email === formData.email &&
          data[i].senha === formData.senha
        ) {
          console.log(data[i]);
          navigate("/");
          return;
        }
      }

      alert("Usuário ou senha inválido");
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  const handleSendPassword = () => {
    alert("Um e-mail de redefinição de senha foi enviado.");
  };

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Inicie sua sessão</Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              type="email"
              placeholder="E-mail"
              leftIcon={<MdEmail />}
              name="email"
              control={control}
            />
            {errors.email && <span>E-mail é obrigatório</span>}
            <Input
              type="password"
              placeholder="Senha"
              leftIcon={<MdLock />}
              name="senha"
              control={control}
            />
            {errors.senha && <span>Senha é obrigatório</span>}
            <Button title="Entrar" variant="secondary" type="submit" />
          </form>
          <Row>
            <EsqueciText href="" onClick={handleSendPassword}>
              Esqueci minha senha
            </EsqueciText>
            <CriarText href="/signup">Criar Conta</CriarText>
          </Row>
        </Wrapper>
      </Container>
    </>
  );
};

export { Login };
