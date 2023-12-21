import { useEffect, useState } from 'react'
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';




const App = () => {
  

  const [datosProducto, setdatosProducto] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(response => response.json()
        )
        .then((data) => {
            setdatosProducto(data);
            // console.log(data);
        })
    }, [])

  // useEffect(() => {
  //     getProducts()
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error)
  //     })
  // }, []) 

  return (
      <div style={{width: "100vw", height: "100vh"}}>
        <NavBarComponent/>
        <ItemListContainer datosProducto={datosProducto}/>
      
      </div> 
  )
}

export default App

