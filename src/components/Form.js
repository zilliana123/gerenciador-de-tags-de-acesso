import React, { useState } from "react";
import "../App.css";

function Form() {
  // Estado para armazenar os valores dos campos
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState(""); // Novo estado para CPF
  const [salaDestino, setSalaDestino] = useState(""); // Novo estado para sala de destino
  const [dataNascimento, setDataNascimento] = useState(""); // Novo estado para data de nascimento

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
        <input type="text" value={nome} />
      </div>
      <div className="FormItem">
        <label>Email: </label>
        <input type="email" value={email} />
      </div>
      {/* Novo campo de CPF */}
      <div className="FormItem">
        <label>CPF: </label>
        <input type="text" value={cpf} />
      </div>
      {/* Novo campo de sala de destino */}
      <div className="FormItem">
        <label>Sala de Destino: </label>
        <input type="text" value={salaDestino} />
      </div>
      {/* Novo campo de data de nascimento */}
      <div className="FormItem">
        <label>Data de Nascimento: </label>
        <input type="date" value={dataNascimento} />
      </div>
      <button type="submit" className="FormButton">
        Enviar
      </button>
    </form>
  );
}

export default Form;
