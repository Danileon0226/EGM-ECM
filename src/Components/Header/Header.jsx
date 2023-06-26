import { faArrowRight, faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// ASSETS
import PrimerLogo from '../../assets/img/engimaLogo/enigma.svg'
import SegundoLogo from '../../assets/img/engimaLogo/clothes.svg'

// CSS
import './Header.css'
import { Link, NavLink } from "react-router-dom"


export default function Header() {
    return (
        <div className="headerContainer">
            <a href="#" className="wpp-bar">
                <p>REALIZA TU PEDIDO VIA WHATSAPP</p>
                <FontAwesomeIcon icon={faArrowRight} />
            </a>
            <div className="headerBanner">
                    <div className="header-icons">
                        <button className="icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                    <Link to="/" className="logo-container">
                        <img src={PrimerLogo} alt="Enigma Logo"/>
                        <img src={SegundoLogo} alt="Enigma Logo"/>
                    </Link>
                    <div className="header-icons">
                        <Link to='/cuenta' className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                        <NavLink to='/carrito' className={({isActive}) => isActive ? 'icon iconActivo' : 'icon'}>
                            <FontAwesomeIcon icon={faCartShopping} />
                        </NavLink>
                    </div>
            </div>
            {/* Este Banner Se muestra cuando la resolucion llega a 457px */}
            <div className="headerBanner2">
                <Link to="/" className="logo-container">
                    <img src={PrimerLogo} alt="Enigma Logo"/>
                    <img src={SegundoLogo} alt="Enigma Logo"/>
                </Link>
                <div className="header-icons">
                    <button className="icon">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                    <Link to='/cuenta' className="icon">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                    <NavLink to='/carrito' className={({isActive}) => isActive ? 'icon iconActivo' : 'icon'}>
                            <FontAwesomeIcon icon={faCartShopping} />
                    </NavLink>
                </div>
            </div>
            <nav className="navbar-horizontal">
                <ul>
                    <NavLink className={({isActive}) => isActive ? 'activo' : ''} to="/">Inicio</NavLink>
                    <NavLink to="/">Tienda</NavLink>
                    <NavLink to="/">Contacto</NavLink>
                    <NavLink to="/">Terminos</NavLink>
                </ul>
            </nav>
        </div>
    )
}
