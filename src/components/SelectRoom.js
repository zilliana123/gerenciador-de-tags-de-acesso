import React, { useState } from "react";

function SelectRoom({ salas }) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");

  const handleChange = (e) => {
    setOpcaoSelecionada(e.target.value);
  };

  return (
    <div className="AppSelect">
      <label htmlFor="select">Selecione uma sala:</label>
      <select
        id="select"
        value={opcaoSelecionada}
        onChange={(e) => setOpcaoSelecionada(e.target.value)}
      >
        <option value="">-- Selecione --</option>
        {/* Renderiza dinamicamente as opções com base na lista de salas */}
        {salas.map((sala, index) => (
          <option key={index} value={sala}>
            {sala}
          </option>
        ))}
      </select>
      {/* Exibe a sala selecionada, se houver */}
      {opcaoSelecionada && <p>Sala selecionada: {opcaoSelecionada}</p>}
    </div>
  );
}

export default SelectRoom;
