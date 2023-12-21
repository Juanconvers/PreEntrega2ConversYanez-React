import { useEffect, useState } from 'react'
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import RouterPrincipal from './router/RouterPrincipal';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  return (
      <div style={{width: "100vw", height: "100vh"}}>
        <NavBarComponent/>
        
      </div> 
  )
}

export default App

