import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Estilo específico da Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/clientes">Clientes</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/pedidos">Pedidos</Link>
    </nav>
  );
};

export default Navbar;
