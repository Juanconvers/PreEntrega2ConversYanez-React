import { useEffect, useState } from 'react'
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './components/Product/Product';


const App = () => {
  
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
        <ItemListContainer greeting="¡Bienvenidos a la mejor tienda de Moda Infantil!"/>
        <Card/>
      </div> 
  )
}

export default App

