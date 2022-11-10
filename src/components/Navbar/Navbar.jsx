import {Link} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import './navbar.css'
import FormularioBusqueda from '../FormularioBusqueda/FormularioBusqueda.jsx';
import Dropdown from './Dropdown/Dropdown.jsx';
import Brand from './Brand/Brand.jsx';
const Navbar = () => {
    return (      
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div className="container-fluid">
      <Brand/>  
      <Link className='nav-link' to="/" >
        <button className='btn btn-primary'> Home</button>
      </Link>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
       <Dropdown/>
        </ul> 
      <FormularioBusqueda busqueda={"Buscar usuario"}/>
      </div>
      <CartWidget/>
    </div>
  </nav>
       
    );
}

export default Navbar;


// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon" />
// </button>