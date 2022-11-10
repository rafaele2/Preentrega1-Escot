import {useState, useEffect} from 'react';
import {consultarBDD} from '../../assets/funciones.js'
const ItemList = () => {

    
   const [productos, setPorductos]= useState([]);

   useEffect(()=>{
    consultarBDD('./json/productos.json').then(productos =>{
        const cardProductos = productos.map(prod => 
            <div className="card cardProducto" key={prod.id}>
            <img src={`./img/${prod.img}`} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{prod.nombre}</h5>
              <p className="card-text">Marca:{prod.marca}</p>
              <p className="card-text">Modelo:{prod.modelo}</p>
              <p className="card-text">Precio:{prod.precio}</p>
              <p className="card-text">Stock:{prod.stock}</p> 
              <button className='btn btn-dark'>ver producto</button>                 
            </div>
          </div> )
          setPorductos(cardProductos)
    })
   },[])
   
    
    return (
        <div className='row'>
           {productos} 
        </div>
    );
}

export default ItemList
