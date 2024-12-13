import React, { useState, useEffect } from "react";
import axios from "../services/axios";

const Pedidos = () => {
  const [pedidos, setPedidos] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [novoPedido, setNovoPedido] = useState({
    clienteId: "",
    produtoIds: [],
  });

  useEffect(() => {
    axios.get("/pedidos").then((response) => setPedidos(response.data));
    axios.get("/clientes").then((response) => setClientes(response.data));
    axios.get("/produtos").then((response) => setProdutos(response.data));
  }, []);

  const adicionarPedido = () => {
    if (!novoPedido.clienteId || novoPedido.produtoIds.length === 0) {
      alert("Por favor, selecione um cliente e pelo menos um produto.");
      return;
    }

    axios
      .post("/pedidos", novoPedido)
      .then(() => {
        alert("Pedido adicionado com sucesso!");
        setNovoPedido({ clienteId: "", produtoIds: [] });
        axios.get("/pedidos").then((response) => setPedidos(response.data)); // Atualizar lista
      })
      .catch((error) => alert("Erro ao adicionar pedido."));
  };

  return (
    <div>
      <h1>Pedidos</h1>

      <h2>Adicionar Pedido</h2>
      <select
        value={novoPedido.clienteId}
        onChange={(e) =>
          setNovoPedido({ ...novoPedido, clienteId: e.target.value })
        }
      >
        <option value="">Selecione um Cliente</option>
        {clientes.map((cliente) => (
          <option key={cliente.id} value={cliente.id}>
            {cliente.nome}
          </option>
        ))}
      </select>

      <select
        multiple
        value={novoPedido.produtoIds}
        onChange={(e) =>
          setNovoPedido({
            ...novoPedido,
            produtoIds: Array.from(
              e.target.selectedOptions,
              (option) => option.value
            ),
          })
        }
      >
        {produtos.map((produto) => (
          <option key={produto.id} value={produto.id}>
            {produto.nome}
          </option>
        ))}
      </select>
      <button onClick={adicionarPedido}>Adicionar Pedido</button>

      <ul>
        {pedidos.map((pedido) => (
          <li key={pedido.id}>
            Pedido #{pedido.id} - Cliente: {pedido.cliente.nome} - Produtos:{" "}
            {pedido.produtos.map((produto) => produto.nome).join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pedidos;
