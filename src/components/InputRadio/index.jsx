import { useState } from "react";

import { Container } from "./styles";

const InputRadio = () => {
  const [social, setSocial] = useState();

  return (
    <Container>
      <input
        type="radio"
        name="social"
        value="fisica"
        onChange={(e) => setSocial(e.target.value)}
      />
      Pessoa Física
      <input
        type="radio"
        name="social"
        value="juridica"
        onChange={(e) => setSocial(e.target.value)}
      />
      Pessoa Jurídica
    </Container>
  );
};

export { InputRadio };
