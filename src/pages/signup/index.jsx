import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  MdAddLocation,
  MdAddLocationAlt,
  MdEmail,
  MdHome,
  MdLock,
  MdMail,
  MdPermIdentity,
  MdPerson,
  MdPhoneAndroid,
} from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";
import { api } from "../../services/api";

import { Container, Wrapper, Title } from "./styles";

const SignUp = () => {
  const navigate = useNavigate();

  const phoneReg = /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/;
  //const cpfReg = /(\d{3}.\d{3}.\d{3}-\d{2})/;
  const cepReg = /(\d{5}-\d{3})/;

  const schema = yup.object().shape({
    nome: yup.string().required("Campo obrigatório"),

    cpf: yup.number().required("Campo obrigatório"),

    endereco: yup.string().required("Campo obrigatório"),

    complemento: yup.string(),

    numero: yup.number().required("Campo obrigatório"),

    cep: yup
      .string()
      .matches(cepReg, "CEP inválido")
      .required("Campo obrigatório"),

    celular: yup
      .string()
      .matches(phoneReg, "Número inválido")
      .required("Campo obrigatório"),

    email: yup.string().required("Campo obrigatório"),

    senha: yup.string().required("Campo obrigatório"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    reValidateMode: "onChange",
    mode: "onChange",
  });

  const newLogUser = async (formData) => {
    try {
      const { data } = await api.post(`/cliente`, {
        nome: formData.nome,
        cpf: formData.cpf,
        endereco: formData.endereco,
        complemento: formData.complemento,
        numero: formData.numero,
        cep: formData.cep,
        celular: formData.celular,
        email: formData.email,
        senha: formData.senha,
      });

      alert("Cadastro realizado! Faça o login para continuar");
      console.log(data);
      navigate("/login");
      return;
    } catch (e) {
      //TODO: HOUVE UM ERRO
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Wrapper>
          <Title>Faça seu cadastro</Title>
          <InputRadio />
          <form onSubmit={handleSubmit(newLogUser)}>
            <Input
              type="text"
              placeholder="Nome completo"
              leftIcon={<MdPerson />}
              name="nome"
              control={control}
            />
            <span>{errors.nome?.message}</span>
            <Input
              type="number"
              placeholder="CPF: apenas números"
              leftIcon={<MdPermIdentity />}
              name="cpf"
              control={control}
            />
            <span>{errors.cpf?.message}</span>
            <Input
              type="text"
              placeholder="Endereço"
              leftIcon={<MdAddLocation />}
              name="endereco"
              control={control}
            />
            <span>{errors.endereco?.message}</span>
            <Input
              type="number"
              placeholder="Número"
              leftIcon={<MdHome />}
              name="numero"
              control={control}
            />
            <span>{errors.numero?.message}</span>
            <Input
              type="text"
              placeholder="Complemento"
              leftIcon={<MdAddLocationAlt />}
              name="complemento"
              control={control}
            />
            <Input
              type="text"
              placeholder="CEP: xxxxx-xxx"
              leftIcon={<MdMail />}
              name="cep"
              control={control}
            />
            <span>{errors.cep?.message}</span>

            <Input
              type="text"
              placeholder="Contato: (xx) xxxxx-xxxx"
              leftIcon={<MdPhoneAndroid />}
              name="celular"
              control={control}
            />
            <span>{errors.celular?.message}</span>
            <Input
              type="text"
              placeholder="E-mail"
              leftIcon={<MdEmail />}
              name="email"
              control={control}
            />
            <span>{errors.email?.message}</span>
            <Input
              type="password"
              placeholder="Senha"
              leftIcon={<MdLock />}
              name="senha"
              control={control}
            />
            <span>{errors.senha?.message}</span>
            <Button title="Confirmar" variant="secondary" type="submit" />
          </form>
        </Wrapper>
      </Container>
    </>
  );
};

export { SignUp };
