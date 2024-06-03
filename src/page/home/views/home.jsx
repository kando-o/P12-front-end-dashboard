import Objectif from "../../../components/objectif/views/objectif"
import Poids from "../../../components/poids/views/poids"
import Radar from "../../../components/radar/views/radar"
import Score from "../../../components/score/views/score"
import Layout from "../../../layouts/views/layout"
import Calorie from "../../../components/widgets/calories/views/calorie";
import Lipide from "../../../components/widgets/lipides/views/lipide";
import Glucide from "../../../components/widgets/glucides/views/glucide";
import Proteine from "../../../components/widgets/proteines/views/proteine";

function Home () {
    return(
        <Layout >
            <div className="home">
                <div className="home_seeGlobal">
                    <Poids />
                    <Radar />
                    <Objectif />
                    <Score />
                </div>

                <div className="home_widget">
                    <Calorie />
                    <Lipide/>
                    <Glucide/>
                    <Proteine/>
                </div>

            </div>
        </Layout>
    )
    
}

export default Home