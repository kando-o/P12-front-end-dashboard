import { useContext } from "react"
import "../assets/styles/calorie.css"
import { DataContext } from "../../../../hook/context/context"
import Logo from "../../../logo/views/logo"

function Calorie () {

    const { loadingData : loading, userData, errorData} = useContext(DataContext)

    if (loading) {
        return <div className="calorie skeleton"> Loading... </div>
    }

	if (userData === null)  {
		<div className="calorie_error"> Error: {errorData} </div>
	}

    return <>
        <div className="calorie">
            <Logo type="calorie" width={60} height={60} logoClass="calorie_svg" />
            <div className="calorie_info">
                {userData && (
                    <>
                        <div>{userData.keyData.calorieCount.toLocaleString("en-US")}KCal</div>
                        <h2>Calorie</h2>
                    </>
                )}
                
            </div>
        </div>
    </>
}

export default Calorie
