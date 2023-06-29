import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import db from "../../../Firestore";

const LoginUsuario = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleInicioSesion = (ruta) => {
    navigate(ruta);
  };

  const handleUsuarioNoExistente = (ruta) => {
    navigate(ruta);
  };

  const handleCamposVacios = () => {
    console.log("Campos vacíos");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      handleCamposVacios();
      return;
    }
    const existingUserQuerySnapshot = await db
      .collection("users")
      .where("email", "==", username)
      .where("password", "==", password)
      .get();
    if (!existingUserQuerySnapshot.empty) {
      // El usuario existe, inicia sesión
      setMessage("El usuario existe. Iniciando sesión...");
      handleInicioSesion("/inicio");
 
    } else {
      handleUsuarioNoExistente("/RegistrarUsuario");
    }
    // Restablece el estado
    setUsername("");
    setPassword("");

    // Verifica si la consulta obtuvo resultados
    if (existingUserQuerySnapshot.empty) {
      console.log(
        "No se encontraron usuarios con las credenciales proporcionadas"
      );
    } else {
      console.log(
        "Se encontraron usuarios con las credenciales proporcionadas"
      );
    }
  };

  return (
    <div className="background">
      <div className="shape"></div>
      <div className="shape"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h3>Enigma Clothes</h3>
        {message && <p className={isError ? "error" : "success"}>{message}</p>}
        <label htmlFor="username">Nombre de Usuario</label>
        <input
          type="text"
          placeholder="Nombre de usuario"
          id="username"
          name="username"
          value={username}
          onChange={handleChange}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          placeholder="Contraseña"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <button className="mt-4" type="submit">
          Iniciar Sesion
        </button>
        <div className="social">
          <div>
            <Link to="/RegistrarUsuario">Registrar usuario</Link>
          </div>
          <div>
            <Link to="/RecuperarContraseña">¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginUsuario;
