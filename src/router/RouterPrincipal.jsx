import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Pages/Home"

export const RouterPrincipal = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/category/:id' element={<Categorias/>} /> 
          <Route path='/item/:id' element={<ItemDetailContainer/>} /> 

        
        </Routes>
      </BrowserRouter>
  )
}

export default RouterPrincipal