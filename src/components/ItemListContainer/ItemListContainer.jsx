import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = ({datosProducto}) => {
  console.log(datosProducto);
  
        
          
          return(
            <div>
                 {datosProducto.map((productos) => {
                  return(
                    
              <Card key={productos.key} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="productos.thumbnail" />
                    <Card.Body>
                      <Card.Title>{productos.title}</Card.Title>
                      <Card.Text>
                        {productos.description}
                      </Card.Text>
                      <div>
                        {productos.price}
                      </div>
                      <Button variant="primary">Comprar</Button>
                    </Card.Body>
                  </Card>
                  );
                })}
            </div>
          )
        }
        
export default ItemListContainer