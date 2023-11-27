import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Logado } from "../../components/Logado";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { Container, Wrapper, Title } from "./styles";

const AddType = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    codigo: yup.number().required("Campo obrigatório"),

    descricao: yup.string().required("Campo obrigatório"),
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

  const newType = async (formData) => {
    try {
      const { data } = await api.post(`/tipoProduto`, {
        codigo: formData.codigo,
        descricao: formData.descricao,
      });

      alert("Tipo de produto adicionado com sucesso!");
      console.log(data);
      navigate("/type");
      return;
    } catch (e) {
      //TODO: HOUVE UM ERRO
      alert("Houve um erro...");
    }
  };

  return (
    <>
      <Logado />
      <Container>
        <Wrapper>
          <Title>Informe os dados do tipo de produto</Title>
          <form onSubmit={handleSubmit(newType)}>
            <Input
              type="number"
              placeholder="Código"
              name="codigo"
              control={control}
            />
            <span>{errors.codigo?.message}</span>
            <Input
              type="text"
              placeholder="Tipo do Produto"
              name="descricao"
              control={control}
            />
            <span>{errors.descricao?.message}</span>
            <Button title="Confirmar" variant="secondary" type="submit" />
          </form>
        </Wrapper>
      </Container>
    </>
  );
};

export { AddType };
