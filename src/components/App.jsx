import Navbar from './Navbar/Navbar.jsx';
import FormularioBusqueda from './FormularioBusqueda/FormularioBusqueda.jsx';
import './app.css';
const App = () => {
  return (
    <>
    <Navbar/>
    <FormularioBusqueda busqueda={"Buscar usuarios"}/>
    </>
  );
}

export default App;
