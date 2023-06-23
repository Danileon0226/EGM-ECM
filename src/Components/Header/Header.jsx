import { faArrowRight, faCartShopping, faMagnifyingGlass, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// ASSETS
import PrimerLogo from '../../assets/img/engimaLogo/enigma.svg'
import SegundoLogo from '../../assets/img/engimaLogo/clothes.svg'

// CSS
import './Header.css'


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
                    <a className="logo-container">
                        <img src={PrimerLogo} alt="Enigma Logo"/>
                        <img src={SegundoLogo} alt="Enigma Logo"/>
                    </a>
                    <div className="header-icons">
                        <a href='#' className="icon">
                            <FontAwesomeIcon icon={faUser} />
                        </a>
                        <a href='#' className="icon">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </a>
                    </div>
            </div>
            <nav className="navbar-horizontal">
                <ul>
                    <a className="activo" href="#">Inicio</a>
                    <a href="#">Tienda</a>
                    <a href="#">Contacto</a>
                    <a href="#">Terminos</a>
                </ul>
            </nav>
        </div>
    )
}
