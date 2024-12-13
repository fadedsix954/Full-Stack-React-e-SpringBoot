import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Produtos from "./pages/Produtos";
import Pedidos from "./pages/Pedidos";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/clientes">Clientes</Link> |{" "}
        <Link to="/produtos">Produtos</Link> |{" "}
        <Link to="/pedidos">Pedidos</Link>
      </nav>
      <Routes>
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pedidos" element={<Pedidos />} />
      </Routes>
    </Router>
  );
};

export default App;
