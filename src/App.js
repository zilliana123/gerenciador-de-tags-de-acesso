import React, { useState } from "react";

import "./App.css";
import Form from "./components/Form";
import SelectRoom from "./components/SelectRoom";

function App() {
  // Estado que armazena a lista de salas disponíveis
  const [salas, setSalas] = useState([]);

  // Função para adicionar uma nova sala à lista
  const adicionarSala = (novaSala) => {
    // Verifica se a sala não está vazia e ainda não foi adicionada
    if (novaSala && !salas.includes(novaSala)) {
      setSalas([...salas, novaSala]); // Adiciona a nova sala
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Gerenciador de Tags</p>
      </header>

      <div className="Container-sections">
        <section>
          <p>Formulário de Cadastro</p>
          <Form adicionarSala={adicionarSala} />
        </section>
        <section>
          <p>Salas</p>
          <SelectRoom salas={salas} />
        </section>
      </div>
    </div>
  );
}

export default App;
