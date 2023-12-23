import { useEffect, useState } from 'react'
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
// import RouterPrincipal from './router/RouterPrincipal';

import "bootstrap/dist/css/bootstrap.min.css";


import { getProducts } from "./services";

const App = () => {

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

  return (
      <div style={{width: "100vw", height: "100vh"}}>
        {/* <RouterPrincipal/> */}
        <ItemListContainer datosProducto={datosProducto} />
      </div> 
  );
};

export default App

