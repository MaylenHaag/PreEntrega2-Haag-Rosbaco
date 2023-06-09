import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg barraNav">
             <div className="container-fluid">
             <h1 className="logo">Farmacia Solidaria</h1>
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
            
              <a className="nav-link active" aria-current="page" href="#" class="btn btn-outline-light">
              Dermo
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#" class="btn btn-outline-light">
              Bebés
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#" class="btn btn-outline-light">
              Hogar
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#" class="btn btn-outline-light">
              Belleza
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#" class="btn btn-outline-light">
              Limpieza
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#" class="btn btn-outline-light">
              Cuidado Personal
              </a>
            </li>
            <li className="nav-item">
            
              <a className="nav-link active" aria-current="page" href="#" class="btn btn-outline-light">
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
