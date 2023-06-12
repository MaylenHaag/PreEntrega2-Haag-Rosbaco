import CartWidget from "../CartWidget/CartWidget"
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg barraNav">
          <div className="container-fluid">
            <Link to='/'>
              <h2 className="logo">Farmacia Solidaria</h2>
            </Link>
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
              <div className="collapse navbar-collapse"      id="navbarSupportedContent">
                <NavLink to={`category/dermo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Dermo</NavLink>
                <NavLink to={`category/bebes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Bebés</NavLink>
                <NavLink to={`category/hogar`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Hogar</NavLink>
                <NavLink to={`category/belleza`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Belleza</NavLink>
                <NavLink to={`category/limpieza`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Limpieza</NavLink>
                <NavLink to={`category/cuidadopersonal`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cuidado Personal</NavLink>
                <NavLink to={`category/nutricionydeportes`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Nutrición y Deportes</NavLink>

                <CartWidget />
              </div>
          </div>
        </nav>
    )
}

export default NavBar
