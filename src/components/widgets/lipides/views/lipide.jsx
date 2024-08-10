import { DataContext } from "../../../../hook/context/context"
import { useContext } from "react"
import "../assets/styles/lipide.css"
import Logo from "../../../logo/views/logo"

function Lipide () {

    const {loadingPerformance : loading , userData, errorData} = useContext(DataContext) 

    if (loading) {
        return <div className="lipide skeleton"> Loading... </div>
    }

    return (
        <div className="lipide">
            <Logo type="fat" width={60} height={60} logoClass="lipide_svg"/>
            <div className="lipide_info">
                {userData && (
                    <>
                        <div>{JSON.stringify(userData.keyData.lipidCount)}g</div>
                        <h2>Lipide</h2>
                    </>
                )}
                {errorData && (
                    <div>{userData && JSON.stringify(errorData)}</div>
                )}
            </div>
        </div>
    )
}

export default Lipide
