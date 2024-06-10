import { NavLink, useLocation } from "react-router-dom"
import { useContext } from "react";
import {DataContext} from "../../../hook/context/context";
import "../assets/styles/poids.css"
import Layout from "../../../layouts/views/layout";


function Poids () {
    const {userData, errorData} = useContext(DataContext)
    const location = useLocation()
    const path = location.path
    console.log(location.pathname, path === "/poids", location)

    return(<>
            <div className="mainPoids">
                <h1>Page Poids</h1>
                {userData && <div>{JSON.stringify(userData)}</div>}
                { errorData && <div>{JSON.stringify(userData)}</div>}
            </div> 
            {
                path === "/poids" && <NavLink to="/" >Retour vers Home</NavLink> 
            }
          
        
        {/* TODO changer la condition pour faire apparaitre le CTA Home  */}
    </>
    )
}

export default Poids
