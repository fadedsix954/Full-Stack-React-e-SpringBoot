import React, { useState, useEffect } from "react";
import axios from "../services/axios";

const Clientes = () => {
  const [clientes, setClientes] = useState([]);
  const [nomeBusca, setNomeBusca] = useState("");

  useEffect(() => {
    axios.get("/clientes").then((response) => setClientes(response.data));
  }, []);

  const buscarClientes = () => {
    axios
      .get(`/clientes?nome=${nomeBusca}`)
      .then((response) => setClientes(response.data));
  };

  return (
    <div>
      <h1>Clientes</h1>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={nomeBusca}
        onChange={(e) => setNomeBusca(e.target.value)}
      />
      <button onClick={buscarClientes}>Buscar</button>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>{cliente.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;
