import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ItemListContainer = ({datosProducto}) => {
  return (
      <div style={{width: '100vw', height: '100vh', display: 'flex', flexWrap: 'wrap'}}>
        {datosProducto.map((products) => {
          return (
            <Card key={products.id} style={{ width: "18rem" , margin: 15}}>
               <Link to={`/item/${products.id}`}><Card.Img variant="top" src={products.thumbnail} /></Link>
              <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>
                {products.description}
                </Card.Text>
                <div>{products.price}</div>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          );
        })}
      </div>
  );
};

export default ItemListContainer;