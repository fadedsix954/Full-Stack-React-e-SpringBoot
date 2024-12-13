import React from "react";
import "./Form.css"; // Estilo específico do formulário

const Form = ({ fields, onSubmit }) => {
  return (
    <form className="custom-form" onSubmit={onSubmit}>
      {fields.map((field, index) => (
        <div key={index} className="form-group">
          <label htmlFor={field.name}>{field.label}</label>
          <input
            type={field.type}
            id={field.name}
            name={field.name}
            placeholder={field.placeholder}
            required={field.required}
          />
        </div>
      ))}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
