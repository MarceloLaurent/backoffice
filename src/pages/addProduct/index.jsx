import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Logado } from "../../components/Logado";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

import { Container, Wrapper, Title } from "./styles";

const AddProduct = () => {
  const navigate = useNavigate();

  const schema = yup.object().shape({
    codigoProduto: yup.number().required("Campo obrigatório"),

    tipoProduto: yup.string().required("Campo obrigatório"),
    
    nome: yup.string().required("Campo obrigatório"),

    valor: yup.number().required("Campo obrigatório"),

    descricao: yup.string().required("Campo obrigatório"),

    quantidadeEstoque: yup.number().required("Campo obrigatório"),
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
      const { data } = await api.post(`/produto`, {
        codigoProduto: formData.codigoProduto,
        tipoProduto: formData.tipoProduto,
        nome: formData.nome,
        valor: formData.valor,
        descricao: formData.descricao,
        quantidadeEstoque: formData.quantidadeEstoque,
      });

      console.log(data);
      alert("Produto adicionado com sucesso!");
      navigate("/product");
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
          <Title>Informe os dados do produto</Title>
          <form onSubmit={handleSubmit(newType)}>
            <Input
              type="number"
              placeholder="Código"
              name="codigoProduto"
              control={control}
            />
            <span>{errors.codigoProduto?.message}</span>
            <Input
              type="text"
              placeholder="Tipo do Produto"
              name="tipoProduto"
              control={control}
            />
            <span>{errors.tipoProduto?.message}</span>
            <Input
              type="text"
              placeholder="Nome do Produto"
              name="nome"
              control={control}
            />
            <span>{errors.nome?.message}</span>
            <Input
              type="number"
              placeholder="Valor"
              name="valor"
              control={control}
            />
            <span>{errors.valor?.message}</span>
            <Input
              type="text"
              placeholder="Descrição"
              name="descricao"
              control={control}
            />
            <span>{errors.descricao?.message}</span>
            <Input
              type="number"
              placeholder="Estoque"
              name="quantidadeEstoque"
              control={control}
            />
            <span>{errors.quantidadeEstoque?.message}</span>
            <Button title="Confirmar" variant="secondary" type="submit" />
          </form>
        </Wrapper>
      </Container>
    </>
  );
};

export { AddProduct };
