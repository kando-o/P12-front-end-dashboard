import { NavLink } from "react-router-dom"
import "../assets/styles/navigation.css"
import Logo from "../../icons/logo"

function Navigation () {
    return (
        <nav className="navigation">
            <ul className="navigation_list">
                <li className="navigation_item">
                    <Logo logoClass="logoNav"/>
                </li>
                <li className="navigation_item">
                    <NavLink to={'/'}>Accueil</NavLink>
                </li>
                <li className="navigation_item">
                    <NavLink to="/">Profil</NavLink>
                </li>
                <li className="navigation_item">
                    <NavLink to="/reglage">Réglage</NavLink>
                </li>
                <li className="navigation_item">
                    <NavLink to="/">Communauté</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation