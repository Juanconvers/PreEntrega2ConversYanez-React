import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

const Home = () => {
 
    const [datosProducto, setdatosProducto] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then((datosProducto) => setdatosProducto(datosProducto));     
        // .catch((error) => {
        //   console.log(error);
        // });
    }, [])
  
    console.log(datosProducto)

    return (
    <ItemListContainer datosProducto={datosProducto}/>
  )
}

export default Home