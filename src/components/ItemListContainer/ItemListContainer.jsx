const ItemListContainer = (props) => {
  return (
    <div style={{fontSize: "2rem", display: "flex", flexFlow: "row", justifyContent: "center", alignItems: "center"}}>{props.greeting}</div>
  )
}

export default ItemListContainer