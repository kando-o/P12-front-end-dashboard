import { useContext } from "react";
import { DataContext } from "../../../hook/context/context";
import "../assets/styles/score.css"

function Score () {
    // const { , errorData} = useContext(DataContext)
    
    console.log();
    
    // if (!userPerformance) {
    //     <div>Error:{errorData}</div>
    // }

    return <>
    <div className="mainScore">
            <h1>Score</h1>
            {/* { && <div> {JSON.stringify()}</div>}
            { && <div> {JSON.stringify()}</div>} */}
        </div>
    </>
}

export default Score