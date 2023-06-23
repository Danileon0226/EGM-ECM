import { useEffect, useState } from "react"


//Css
import './Productos.css'
export default function Productos() {

    const [allProducts, setAllProducts] = useState([])

    useEffect(()=> {
        fetch('https://dummyjson.com/products')
        .then(response => response.json())
        .then(productos => setAllProducts(productos.products))
    }, [])

    console.log(allProducts)

    return (
        <div className="ProductosContainer">
            {allProducts.map((producto)=> 
                <a href="#" key={producto.id} className="producto-card">
                    <div className="producto-img">
                        <img src={producto.images[0]} alt="" />
                    </div>
                    <div className="prodcucto-info">
                        <p className="product-title">{producto.title}</p>
                        <p className="product-price">${producto.price}</p>
                    </div>
                </a>
            )}
        </div>
    )
}
