import Header from "../Components/Header/Header";
import Carrito from "../Pages/Carrito";
import Home from "../Pages/Home";
import Producto from "../Pages/Producto/Producto";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginUsuario from "../Pages/Login/LoginUsuario";
import RegistroUsuario from "../Pages/RegistroUsuario/RegistroUsuario";
import RecuperarContraseña from "../Pages/RecuperarContraseña/RecuperarContraseña";

export default function Rutas() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* RUTAS PUBLICAS */}
        <Route path="*" element={<LoginUsuario />} />
        <Route path="/" element={<LoginUsuario />} />
        <Route path="RegistrarUsuario" element={<RegistroUsuario />} />
        <Route path="RecuperarContraseña" element={<RecuperarContraseña />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/producto/:id" element={<Producto />} />

        {/* RUTAS PRIVADAS */}
      </Routes>
    </BrowserRouter>
  );
}
