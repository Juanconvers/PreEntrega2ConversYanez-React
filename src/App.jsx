import { useEffect, useState } from 'react'
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import Home from './Pages/Home';

import 'bootstrap/dist/css/bootstrap.min.css';





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
        
      
      
      </div> 
  )
}

export default App

