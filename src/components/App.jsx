import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar.jsx';
import FormularioBusqueda from './FormularioBusqueda/FormularioBusqueda.jsx';
import ItemList from './ItemListContainer/ItemList.jsx';
import Producto from './Producto/Producto.jsx';
import Carrito from './Carrito/Carrito.jsx';
import './app.css';
const App = () => {
  return (
    <>
  <BrowserRouter>
    <Navbar/>
    <FormularioBusqueda busqueda={"Buscar usuarios"}/>
    <Routes>
      <Route path='/' element={<ItemList/>}/>
      <Route path='/producto/:id' element={<Producto/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
    </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
