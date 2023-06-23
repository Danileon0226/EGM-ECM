import Header from "../Components/Header/Header";
import Carrito from "../Pages/Carrito";
import Home from "../Pages/Home";
import Producto from "../Pages/Producto";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Rutas() {
  return (
    <BrowserRouter>

      <Header /> 
      <Routes >
        <Route path="*" element={<Home />}/>
        <Route path="/" element={<Home />}/>
        <Route path="/inicio" element={<Home />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/producto/:id" element={<Producto />}/>
      </Routes>
    </BrowserRouter>
  )
}
