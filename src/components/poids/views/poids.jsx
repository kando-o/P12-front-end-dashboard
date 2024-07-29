import { useContext } from "react";
import {DataContext} from "../../../hook/context/context";
import "../assets/styles/poids.css"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


function Poids () {
    const {userData, errorData} = useContext(DataContext)

    if (!userData) {
        return <div className="mainPoids_error">Error: {errorData}</div>
    }

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
