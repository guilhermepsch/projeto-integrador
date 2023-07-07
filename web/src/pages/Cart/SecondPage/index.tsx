import { useEffect, useState } from "react";
import { ClientAddress } from "../../../requests/ClientAddressRequest";
import "./styles.css";

export interface SecondPageProps {
  address: ClientAddress[];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

export default function SecondPage({
  address,
  handleNextPage,
  handlePreviousPage,
}: SecondPageProps) {
  const [endereçoSelecionado, setEndereçoSelecionado] = useState<number>(0);

  function handleSelectAddress() {
    setEndereçoSelecionado(endereçoSelecionado + 1);
  }

  if (address.length === 0)
    return (
      <>
        <p className="set-address">ESCOLHA O ENDEREÇO:</p>
        <p className="no-address">Parece que você não tem um endereço cadastrado</p>
        <span className="add-button">Adicionar</span>
        <div className="buttons-back-next">
        <div className="back-button-2" onClick={() => handlePreviousPage()}>Voltar</div>
        </div>
      </>
    );
  return (
    <>
      <p className="set-address">ESCOLHA O ENDEREÇO:</p>
        {address.map((address, key) => (
          <div  key={key}>
          <div className="address-box">
          <div className="address">
          {address.clad_street}, {address.clad_number}, {address.clad_other}, {address.clad_city}, {address.clad_state}, {address.clad_cep}
          </div>
          <div className="select-button">.</div>
          </div>
          </div>
        ))}
        <div className="buttons-back-next">
        <div className="back-button-2" onClick={() => handlePreviousPage()}>Voltar</div>
        <div className="next-button-2" onClick={() => handleNextPage()}>Continuar</div>
        </div>
    </>
  );
}