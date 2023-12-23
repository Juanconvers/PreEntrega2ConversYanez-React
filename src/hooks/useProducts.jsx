import { useState, useEffect } from "react";
import {getProducts} from "../services"

export const useGetProducts = (limit) => {

    const [datosProducto, setdatosProducto] = useState([]);
  
  useEffect(() => {
    getProducts()
      .then((response) => {
        setdatosProducto(response.data.products)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return {datosProducto}
}

export default useGetProducts
