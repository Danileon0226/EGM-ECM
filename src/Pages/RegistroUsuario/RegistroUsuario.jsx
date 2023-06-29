import React, { useState } from "react";
import db from "../../../Firestore";
import "./RegistroUsuario.module.css";

const RegistroUsuario = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    reservword: "",
  });

  const [state, setState] = useState({
    error: "",
    message: "",
  });

  const { error, message } = state;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (
        formData.email === "" ||
        formData.password === "" ||
        formData.reservword === ""
      ) {
        setState({
          error: "Campos vacíos",
          message: "",
        });
        return;
      }

      await db.collection("users").add(formData);

      setState({
        error: "",
        message: "¡Registro exitoso! Usuario registrado correctamente",
      });

      setFormData({
        email: "",
        password: "",
        reservword: "",
      });
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
      setState({
        message: "",
        error: "Ocurrió un error al registrar el usuario",
      });
    }
  };

  const handleClear = () => {
    setFormData({
      email: "",
      password: "",
      reservword: "",
    });

    setState({
      error: "",
      message: "",
    });
  };

  return (
    <>
      <div className="container">
        <h2>Registra tu usuario</h2>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reservword">Palabra Reservada</label>
            <input
              type="password"
              id="reservword"
              name="reservword"
              className="form-control"
              value={formData.reservword}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClear}
            >
              Limpiar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RegistroUsuario;
