

const Dropdown = () => {
    return (
       
             <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">pc armadas</a></li>
              <li><a className="dropdown-item" href="#">componentes</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">accesorios</a></li>
            </ul>
          </li>  
        
    );
}

export default Dropdown;
