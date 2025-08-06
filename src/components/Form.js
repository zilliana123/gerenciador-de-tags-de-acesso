import React, { useState } from "react";
import "../App.css";

function Form() {
  // Estado para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [salaDestino, setSalaDestino] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  //Máscara do CPF
  const formatCpf = (value) => {
    // Remove tudo que não é número
    const numericValue = value.replace(/\D/g, "");

    // Aplica a máscara
    return numericValue
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // evita o recarregamento da página
    // Aqui você pode adicionar o que deseja fazer com os dados ao enviar o formulário
    console.log({ nome, email, cpf, salaDestino, dataNascimento });
  };

  return (
    <form onSubmit={handleSubmit} className="AppForm">
      <div className="FormItem">
        <label>Nome: </label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="FormItem">
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      {/* Novo campo de CPF */}
      <div className="FormItem">
        <label>CPF: </label>
        <input
          type="text"
          value={cpf}
          onChange={(e) => setCpf(formatCpf(e.target.value))}
        />
      </div>
      {/* Novo campo de sala de destino */}
      <div className="FormItem">
        <label>Sala de Destino: </label>
        <input
          type="text"
          value={salaDestino}
          onChange={(e) => setSalaDestino(e.target.value)}
        />
      </div>
      {/* Novo campo de data de nascimento */}
      <div className="FormItem">
        <label>Data de Nascimento: </label>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
        />
      </div>
      <button type="submit" className="FormButton">
        Enviar
      </button>
    </form>
  );
}

export default Form;
