import { useEffect, useState } from "react"


//Css
import './Productos.css'
import db from "../../../Firestore";
import { Link } from "react-router-dom";
export default function Productos() {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const collectionRef = db.collection('products');
            const snapshot = await collectionRef.get();
            const documents = snapshot.docs.map(doc => doc.data());
            setAllProducts(documents);
        };
    
        fetchData();
    }, []);

    console.log(allProducts)

    return (
        <div className="ProductosContainer">
            {allProducts.map((producto)=> 
                <Link to={"/producto/" + producto.id} key={producto.id} className="producto-card">
                    <div className="producto-img">
                        <img src={producto.image} alt="" />
                    </div>
                    <div className="prodcucto-info">
                        <p className="product-title">{producto.nombre}</p>
                        <p className="product-price">${producto.price}</p>
                    </div>
                </Link>
            )}
        </div>
    )
}
