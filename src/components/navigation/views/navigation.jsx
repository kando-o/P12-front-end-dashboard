import { NavLink } from "react-router-dom"
import "../assets/styles/navigation.css"
import Logo from "../../logo/views/logo"


function Navigation () {
    return (
        <nav>
            <div className="navigation">
                <Logo width={200} height={60} logoClass="logoNav" type="logoNav"/>
                <ul className="navigation_list">
                    <li className="navigation_item">
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li className="navigation_item">
                        <NavLink to="/">Profil</NavLink>
                    </li>
                    <li className="navigation_item">
                        <NavLink to="/">Réglage</NavLink>
                    </li>
                    <li className="navigation_item">
                        <NavLink to="/">Communauté</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation