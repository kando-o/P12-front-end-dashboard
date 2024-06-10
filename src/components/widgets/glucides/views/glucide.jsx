import { useContext } from "react"
import "../assets/styles/glucide.css"
import { DataContext } from "../../../../hook/context/context"
import Logo from "../../../logo/views/logo"

function Glucide () {

    const {userData, errorData} = useContext(DataContext) 

    if (errorData) {
        return <div className="glucide_error"> Error: {errorData}</div>
    }
    
    if (!userData) {
        return <div className="glucide_loading"> Loading...</div>
    }
    const {keyData} = userData.data

    return <>
        <div className="glucide">
            <Logo type="glucide" width={60} height={60} logoClass="lipide_svg"/>
            <div>{userData && JSON.stringify(keyData.carbohydrateCount)}g</div>
            <h1>Glucide</h1>
            <div>{errorData && JSON.stringify(errorData)}</div>
        </div>
    </>
}

export default Glucide
