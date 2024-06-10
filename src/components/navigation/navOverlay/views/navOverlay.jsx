import Logo from "../../../logo/views/logo"
import { NavLink } from "react-router-dom"
import "../assets/styles/navOverlay.css"


function NavOverlay () {
    return (
        <>
            <ul className="logo">
                <li className="logo_item">
                <NavLink to="/poids"><Logo width={40} height={40} logoClass="logo_natation" type="zen" /></NavLink>
                </li>

                <li className="logo_item">
                <NavLink to="/score"><Logo width={40} height={40} logoClass="logo_natation" type="natation" /></NavLink>
                </li>

                <li className="logo_item">
                <NavLink to="/radar"><Logo width={40} height={40} logoClass="logo_natation" type="velo" /></NavLink>
                </li>

                <li className="logo_item">
                <NavLink to="/objectif"><Logo width={40} height={40} logoClass="logo_natation" type="weigth" /></NavLink>
                </li>
            </ul>
        </>
    )
}

export default NavOverlay
