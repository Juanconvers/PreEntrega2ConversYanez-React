import { useEffect, useState } from "react"

function Card () {
    
    const [producto, setProductos] = useState();

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(response => response.json()
        )
        .then((data) => {
            setProductos(data);
        })
    }, [])
    
   return (
    <div>
        {producto && producto.image}
    </div>
   )
}

export default Card;