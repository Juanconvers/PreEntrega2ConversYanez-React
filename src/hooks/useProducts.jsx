import { useState, useEffect } from "react";
import {getProducts, getProductsById} from "../services"

export const useGetProducts = (limit) => {

    const [datosProducto, setdatosProducto] = useState([]);
  
  useEffect(() => {
    getProducts(limit)
      .then((response) => {
        setdatosProducto(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {datosProducto}
}



export const useGetProductsById = (id) => {

  const [datoProducto, setdatoProducto] = useState([]);

useEffect(() => {
  getProductsById(id)
    .then((response) => {
      setdatoProducto(response.data)
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

return {datoProducto}
}
