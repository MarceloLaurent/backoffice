import { useEffect, useState } from "react";

import { Row, TypeContainer } from "./styles";
import { api } from "../../services/api";
import { Logado } from "../../components/Logado";
import { ButtonItens } from "../../components/ButtonItens";

const Types = () => {
  const [types, setTypes] = useState([]);

  const getTypes = async () => {
    try {
      const { data } = await api.get(`tiposProdutos`);

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
      <TypeContainer>
        <h1>Tipos</h1>
        {types.map((type) => (
          <div className="type" hey={type.codigo}>
            <p>{type.descricao}</p>
            <Row>
              <ButtonItens title="Atualizar" variant="primary" type="submit" />
              <ButtonItens title="Remover" variant="secondary" type="submit" />
            </Row>
          </div>
        ))}
      </TypeContainer>
    </>
  );
};

export { Types };
