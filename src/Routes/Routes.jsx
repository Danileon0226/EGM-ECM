import Carrito from "../Pages/Carrito";
import Home from "../Pages/Home/Home";


const routes = [
  { path: "*", component: Home },
  { path: "/", component: Home },
  { path: "Inicio", component: Home },
  {path: 'Carrito', componen: Carrito}
];

export { routes };
