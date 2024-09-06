import { useContext } from "react"
import "../assets/styles/proteine.css"
import { DataContext } from "../../../../hook/context/context"
import Logo from "../../../logo/views/logo"

function Proteine () {

    const {loadingActivity : loading, userData, errorData} = useContext(DataContext) 

    if (loading) {
        return <div className="protein skeleton"> Loading... </div>
    }

	if (userData === null)  {
		<div className="calorie_error"> Error: {errorData} </div>
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
            </div>
        </div>
    </>
}

export default Proteine
