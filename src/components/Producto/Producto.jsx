import React from 'react';
import { useState, useEffect } from 'react';
import {useParams} from "react-router-dom"
import {consultarBDD} from "../../assets/funciones"
const Producto = () => {

    const [producto, setProducto] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        consultarBDD('../json/productos.json').then(productos => {
            const prod = productos.find(productoArray => productoArray.id === parseInt(id))
            console.log(prod)
        })
    },[])

    return (
        <div>
        <h1>Producto</h1>
        </div>
    );
}

export default Producto;
