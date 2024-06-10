import { useContext } from "react"
import "../assets/styles/proteine.css"
import { DataContext } from "../../../../hook/context/context"
import Logo from "../../../logo/views/logo"

function Proteine () {
    const {userData, errorData} = useContext(DataContext)

    if (errorData) {
        return <div className="proteine_error">Error: {errorData}</div>
    }

    if (!userData) {
        return <div className="proteine">
            <h1>Component Proteine</h1>
            <div className="proteine_error">Loading...</div>
        </div>
    }

    const {keyData} = userData.data

    return <>
        <div className="proteine">
            <Logo type="protein" width={60} height={60} logoClass="protein_svg"/>
            <div className="protein_data">{userData && JSON.stringify(keyData.proteinCount)}g</div>
            <h2>Proteine</h2>
            <div className="protein_error">{errorData && errorData}</div>
        </div>
    </>
}

export default Proteine
