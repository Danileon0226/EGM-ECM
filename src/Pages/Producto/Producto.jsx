import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faShare } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import db from '../../../Firestore'
import './Producto.css'
import { useParams } from 'react-router'


export default function Producto() {

    const { id } = useParams()

    const [productData, setProductData] = useState([])


    useEffect(() => {
        realizarConsultaPorId(id)
      }, [id])
    
      const realizarConsultaPorId = async (id) => {
        try {
          const producto = await db.collection('products').where('id', '==', id).get()
          if (!producto.empty) {
            const fetchedProduct = producto.docs.map((doc) => {
              const productData = doc.data()
              return {
                id: productData.id,
                image: productData.image,
                price: productData.price,
                discountPrice: productData['descount price'],
                sizes: productData.size,
                nombre: productData.nombre
              }
            })
            setProductData(fetchedProduct[0]) // Tomar el primer elemento ya que solo se espera un documento con un ID único
          } else {
            // No se encontraron documentos que coincidan con el ID
            setProductData(null)
          }
        } catch (error) {
          console.log(error)
        }
      }
    

    const [cantidadProducto, setCantidadProducto] = useState(1)

    const quitarCantidad = () => {
        setCantidadProducto(cantidadProducto - 1)
        if(cantidadProducto === 1){
            setCantidadProducto(1)
        }
    }


    const ponerCantidad = () => {
        setCantidadProducto(cantidadProducto + 1)
    }


    console.log(productData)

    return (
        <div className="productPageContainer">
            <div className="product-page-img">
                <img src={productData.image} alt="" />
            </div>
            <div className="productPage-info">
                <h1>
                    {productData.nombre}
                </h1>
                <h2>
                    ${productData.price}
                </h2>
                <div className="buyOptions">
                    <label htmlFor="selectSize">Tamaño</label>
                    <select id="selectSize">
                        <option value="S">S</option>
                        <option value="M">L</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                        <option value="XXXL">XXXL</option>
                    </select>
                    <label htmlFor="cantidad">Cantidad</label>
                    <div className="cantidadContainer">
                        <button onClick={quitarCantidad}><FontAwesomeIcon icon={faMinus} /></button>
                        <input className="cantidad-input" type="number" value={cantidadProducto} id="cantidad" />
                        <button onClick={ponerCantidad}><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                    <div className="shopControls">
                        <button>Agregar al carrito</button>
                        <button>Comprar ahora</button>
                    </div>
                    <a href="" className='shareProduct'><FontAwesomeIcon icon={faShare} /> Compartir este producto</a>
                </div>

                <div className="info">
                    <p className='p-claro '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quia magni itaque nulla modi excepturi consequatur quisquam perferendis, ratione, assumenda eaque illo repellat cumque vero aut aliquid sed laboriosam non?</p>

                    <p className='p-negrilla'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, sequi delectus. Quae praesentium quas error, laudantium consectetur nesciunt corrupti voluptates fuga nihil aliquam voluptate iure magnam dicta? Saepe, possimus cumque.</p>
                </div>

                <div className="tabla">
                    <table>
                        <thead>
                        <tr>
                            <th>Talla</th>
                            <th>Ancho x Alto</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>S</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>M</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>L</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>XL</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>XXL</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>XXXL</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>
    )
}
