import React from "react";
import "./Button.css"; // Estilo específico do botão

const Button = ({ text, onClick, type = "button" }) => {
  return (
    <button className="custom-button" onClick={onClick} type={type}>
      {text}
    </button>
  );
};

export default Button;
