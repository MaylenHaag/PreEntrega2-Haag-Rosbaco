import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg bg-light">
             <div className="container-fluid">
             <h1>Farmacia Solidaria</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#">
              Dermo
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#">
              Bebés
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#">
              Hogar
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#">
              Belleza
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#">
              Limpieza
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#">
              Cuidado Personal
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#">
             Nutricion y Deportes
              </a>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
           
           
           
        </nav>
    )
}

export default NavBar
