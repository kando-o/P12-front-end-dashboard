import { useContext } from "react"
import {DataContext} from "../../../hook/context/context";

import "../assets/styles/radar.css"

function Radar () {
    const {userAverageSessions, errorData} = useContext(DataContext)

    if (!userAverageSessions) {
        return <div className="mainRadar_error">Error: {errorData}</div>
    }

    return <>
        <div className="mainRadar">
            <h1>Component Radar</h1>
            <div> {userAverageSessions && JSON.stringify(userAverageSessions)}</div>
            <div> {errorData && JSON.stringify(errorData)}</div>
        </div>
    </>
}

export default Radar
