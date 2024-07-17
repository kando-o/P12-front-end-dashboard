import { useContext } from "react";
import {DataContext} from "../../../hook/context/context";
import "../assets/styles/poids.css"

function Poids () {
    const {userData, errorData} = useContext(DataContext)
    if (!userData) {
        return <div className="mainPoids_error">Error: {errorData}</div>
    }
    console.log("debug- show this")
    return(<>
            <div className="mainPoids">
                <h1>Page Poids</h1>
                {userData && <div>{JSON.stringify(userData)}</div>}
                { errorData && <div>{JSON.stringify(errorData)}</div>}
            </div> 
    </>
    )
}

export default Poids
