import { useContext } from "react"
import "../assets/styles/calorie.css"
import { DataContext } from "../../../../hook/context/context"
import Logo from "../../../logo/views/logo"
function Calorie () {
    const { userData, errorData} = useContext(DataContext)
    
    if (errorData) {
        return <div className="calorie_error"> Error: {errorData} </div>
    }
    
    if (!userData) {
        return <div className="calorie_loading"> Loading... </div>
    }
    
    const { keyData } = userData.data 
    return <>
        <div className="calorie">
    <Logo type="calorie" width={60} height={60} logoClass="calorie_svg" />
            <h2>Calorie</h2>
            <div>{userData && keyData.calorieCount}</div>
            <div>{errorData && JSON.stringify(errorData)}</div>
        </div>
    </>
}

export default Calorie
