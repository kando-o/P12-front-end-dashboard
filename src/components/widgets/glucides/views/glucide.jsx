import { useContext } from "react"
import "../assets/styles/glucide.css"
import { DataContext } from "../../../../hook/context/context"
import Logo from "../../../logo/views/logo"

function Glucide () {

    const {loadingAvgSessions : loading, userData, errorData} = useContext(DataContext) 

    if (loading) {
        return <div className="glucide skeleton"> Loading... </div>
    }

    return <>
        <div className="glucide">
            <Logo type="glucide" width={60} height={60} logoClass="lipide_svg"/>
            <div className="glucide_info">
                {userData && (
                    <>
                        <div>{JSON.stringify(userData.keyData.carbohydrateCount)}g</div>
                        <h2>Glucide</h2>
                    </>
                )}
                {errorData && (
                    <div className="glucide_error"> Error: {errorData}</div>
                )}
            </div>
        </div>
    </>
}

export default Glucide
