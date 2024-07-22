import Objectif from "../../../components/objectif/views/objectif"
import Poids from "../../../components/poids/views/poids"
import Radar from "../../../components/radar/views/radar"
import Score from "../../../components/score/views/score"
import Calorie from "../../../components/widgets/calories/views/calorie";
import Lipide from "../../../components/widgets/lipides/views/lipide";
import Glucide from "../../../components/widgets/glucides/views/glucide";
import Proteine from "../../../components/widgets/proteines/views/proteine";
import "../assets/styles/home.css"
import { useContext, } from "react"
import { DataContext } from "../../../hook/context/context"

function Home () {
    const {errorData, loading, userData} = useContext(DataContext)
    if (errorData) {
        console.log("errrrrrrrrrrror")
        return <div>erreeeeeeur !{JSON.stringify(errorData)}</div>
    }
    return(
        <div className="home">
            <div className="profil">
                {!loading && userData && (
                    <>
                        <h1>Bonjour <span>{userData.userInfos.firstName}</span></h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
                    </>
                )}
                {loading && (
                    <>
                        <h1 style={{
                            background:"#ccc",
                        }}>loading ...</h1>
                        <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
                    </>
                )}
            </div>

            <div className="home_seeGlobal">
                <Poids />
                <Radar />
                <Objectif />
                <Score />
            </div>

            <div className="home_widget">
                <Calorie />
                <Proteine/>
                <Glucide/>
                <Lipide/>
            </div>
        </div>
    )
}

export default Home