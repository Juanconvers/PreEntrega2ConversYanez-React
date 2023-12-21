
const ItemDetailContainer = () => {
  return (
    <Card key={productos.id} style={{ width: '18rem' }}>
      <Card.Img variant="top" src="$productos.thumbnail" />
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
  )
}

export default ItemDetailContainer