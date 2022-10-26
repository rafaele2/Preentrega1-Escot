import './navbar.css'
import FormularioBusqueda from '../FormularioBusqueda/FormularioBusqueda.jsx';
import Dropdown from './Dropdown/Dropdown.jsx';
import Brand from './Brand/Brand.jsx';
const Navbar = () => {
    return (
        
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
    <div className="container-fluid">
      <Brand/>  
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">  
       <Dropdown/>
       <li className="nav-item">
            <a className="nav-link" href="#"><button type="button" class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>Button</button></a>
          </li>  
        </ul>
      
      <FormularioBusqueda busqueda={"Buscar usuario"}/>
      </div>
    </div>
  </nav>
       
    );
}

export default Navbar;
