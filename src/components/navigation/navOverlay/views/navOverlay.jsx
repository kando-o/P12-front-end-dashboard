import Logo from "../../../logo/views/logo"
import { NavLink } from "react-router-dom"
import "../assets/styles/navOverlay.css"
import { useContext } from "react"
import { DataContext } from "../../../../hook/context/context"

function NavOverlay () {
	const {id} = useContext(DataContext)

	return (
		<>
			<div className="navigationOverlay">
				<ul className="logo">
					<li className="logo_item">
						<NavLink to={`/user/${id}/poids`}><Logo width={36} height={32} logoClass="logo_natation" type="zen" /></NavLink>
					</li>

					<li className="logo_item">
						<NavLink to={`/user/${id}/score`}><Logo width={32} height={32} logoClass="logo_natation" type="natation" /></NavLink>
					</li>

					<li className="logo_item">
						<NavLink to={`/user/${id}/radar`}><Logo width={38} height={32} logoClass="logo_natation" type="velo" /></NavLink>
					</li>

					<li className="logo_item">
						<NavLink to={`/user/${id}/objectif`}><Logo width={32} height={32} logoClass="logo_natation" type="weigth" /></NavLink>
					</li>
				</ul>
			</div>
		</>
	)
}

export default NavOverlay
