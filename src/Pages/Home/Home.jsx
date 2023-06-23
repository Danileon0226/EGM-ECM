import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import db from "../../../Firestore";
import css from "./Home.module.css";

export default function Home() {
  const navigate = useNavigate();
  const [cars, setCars] = useState([]);

  // AQUI SE HACE LA CONSULTA A LA COLECCION DE LA BASE DE DATOS
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const carsRef = db.collection("cars");
        const snapshot = await carsRef.get();

        const fetchedCars = snapshot.docs.map((doc) => {
          const carData = doc.data();
          return {
            id: doc.id,
            src: carData.imagen,
            alt: carData.placa,
            caption: carData.placa,
            modelo: carData.modelo,
            credit: `Disponible: ${carData.disponible ? "Sí" : "No"}`,
            precio: carData.preciodia,
          };
        });

        setCars(fetchedCars);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <>
      <Header />
      <br />
      <div className={css.productListContainer}>
        {cars.map((car) => (
          <div className={css.productItem} key={car.id}>
            <img src={car.src} alt={car.alt} />
            <h3>{car.caption}</h3>
            <p>Modelo: {car.modelo}</p>
            <p>{car.credit}</p>
            <p>Precio: {car.precio}</p>
          </div>
        ))}
      </div>
    </>
  );
}
