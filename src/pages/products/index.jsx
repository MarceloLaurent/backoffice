import { useEffect, useState } from "react";

import { Row, ProductContainer } from "./styles";
import { api } from "../../services/api";
import { Logado } from "../../components/Logado";
import { ButtonItens } from "../../components/ButtonItens";

const Products = () => {
  const [types, setTypes] = useState([]);

  const getTypes = async () => {
    try {
      const { data } = await api.get(`produtos`);

      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
      }
      setTypes(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTypes();
  }, []);

  return (
    <>
      <Logado />
      <ProductContainer>
        <h1>Produtos</h1>
        {types.map((product) => (
          <div className="product" hey={product.codigoProduto}>
            <p>{product.nome}</p>
            <p>{product.valor}</p>
            <Row>
              <ButtonItens title="Atualizar" variant="primary" type="submit" />
              <ButtonItens title="Remover" variant="secondary" type="submit" />
            </Row>
          </div>
        ))}
      </ProductContainer>
    </>
  );
};

export { Products };


 