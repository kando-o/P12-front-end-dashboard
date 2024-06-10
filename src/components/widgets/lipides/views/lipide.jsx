import { DataContext } from "../../../../hook/context/context"
import { useContext } from "react"
import "../assets/styles/lipide.css"
import Logo from "../../../logo/views/logo"

function Lipide () {
    const {userData, erroData} = useContext(DataContext)
    
    if (erroData) {
        return <div className="lipide_error"> Error: {erroData}</div>
    }
    
    if (!userData) {
        return <div className="lipide_loading"> Loading...</div>
    }

    const {keyData} = userData.data  

    return (

        <div className="lipide">
            <Logo type="fat" width={60} height={60} logoClass="lipide_svg"/>
            <div>{userData && JSON.stringify(keyData.lipidCount)}g</div>
            <h2>Lipide</h2>
            <div>{userData && JSON.stringify(erroData)}</div>
        </div>
        )
}

export default Lipide
