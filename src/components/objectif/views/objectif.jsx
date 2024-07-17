import { useContext } from "react";
import { DataContext } from "../../../hook/context/context";
import "../assets/styles/objectif.css"

function Objectif () {
    const {userPerformance , errorData} = useContext(DataContext)

    if (!userPerformance) {
        <div>Error:{errorData}</div>
    }

    return <>
    <div className="mainObjectif">
            <h1>Objectif</h1>
              { userPerformance && <div> {JSON.stringify(userPerformance)}</div>}
            { errorData && <div> {JSON.stringify(errorData)}</div>}
        </div>    
        </>
}

export default Objectif