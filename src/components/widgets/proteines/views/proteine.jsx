import { useContext } from "react"
import "../assets/styles/proteine.css"
import { DataContext } from "../../../../hook/context/context"
import Logo from "../../../logo/views/logo"

function Proteine () {

    const {loading, userData, errorData} = useContext(DataContext) 

    if (loading) {
        return <div className="protein_loading"> Loading... </div>
    }
    return <>
        <div className="protein">
            <Logo type="protein" width={60} height={60} logoClass="protein_svg"/>
            <div className="protein_info">
                {userData && (
                    <>
                        <div className="protein_data">{JSON.stringify(userData.keyData.proteinCount)}g</div>
                        <h2>Proteine</h2>
                    </>
                )}
                {errorData && (
                    <div className="protein_error">{errorData}</div>
                )}
            </div>
        </div>
    </>
}

export default Proteine
