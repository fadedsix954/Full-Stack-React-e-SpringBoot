import React, { useState, useEffect } from "react";
import axios from "../services/axios";

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [nomeBusca, setNomeBusca] = useState("");
  const [novoProduto, setNovoProduto] = useState({ nome: "", preco: "" });

  useEffect(() => {
    axios.get("/produtos").then((response) => setProdutos(response.data));
  }, []);

  const buscarProdutos = () => {
    axios
      .get(`/produtos?nome=${nomeBusca}`)
      .then((response) => setProdutos(response.data));
  };

  const adicionarProduto = () => {
    if (!novoProduto.nome || novoProduto.preco <= 0) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    axios
      .post("/produtos", novoProduto)
      .then(() => {
        alert("Produto adicionado com sucesso!");
        setNovoProduto({ nome: "", preco: "" });
        axios.get("/produtos").then((response) => setProdutos(response.data)); // Atualizar lista
      })
      .catch((error) => alert("Erro ao adicionar produto."));
  };

  return (
    <div>
      <h1>Produtos</h1>
      <input
        type="text"
        placeholder="Buscar por nome"
        value={nomeBusca}
        onChange={(e) => setNomeBusca(e.target.value)}
      />
      <button onClick={buscarProdutos}>Buscar</button>

      <h2>Adicionar Produto</h2>
      <input
        type="text"
        placeholder="Nome do produto"
        value={novoProduto.nome}
        onChange={(e) =>
          setNovoProduto({ ...novoProduto, nome: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="Preço do produto"
        value={novoProduto.preco}
        onChange={(e) =>
          setNovoProduto({ ...novoProduto, preco: e.target.value })
        }
      />
      <button onClick={adicionarProduto}>Adicionar</button>

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            {produto.nome} - R$ {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Produtos;
