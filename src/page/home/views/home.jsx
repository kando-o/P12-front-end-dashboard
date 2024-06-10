import Objectif from "../../../components/objectif/views/objectif"
import Poids from "../../../components/poids/views/poids"
import Radar from "../../../components/radar/views/radar"
import Score from "../../../components/score/views/score"
import Layout from "../../../layouts/views/layout"
import Calorie from "../../../components/widgets/calories/views/calorie";
import Lipide from "../../../components/widgets/lipides/views/lipide";
import Glucide from "../../../components/widgets/glucides/views/glucide";
import Proteine from "../../../components/widgets/proteines/views/proteine";
import "../assets/styles/home.css"

function Home () {
    return(
        <Layout >
            <div className="home">
            <div className="profil">
                <h1>Bonjour <span>Thomas</span></h1>
                <p>Félicitation ! Vous avez explosé vos objectifs hier </p>
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
        </Layout>
    )
}

export default Home