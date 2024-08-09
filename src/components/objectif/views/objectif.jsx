import { useContext } from "react";
import { DataContext } from "../../../hook/context/context";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "../assets/styles/objectif.css"

function Objectif () {

    const {userPerformance, loading, errorData} = useContext(DataContext)
    const param = window.location.pathname

    const ACTIVITY_FRENCH = [
        'Intensité',
        'Vitesse',
        'Force',
        'Endurance',
        'Energie',
        'Cardio'
    ]

    const dataClean = userPerformance ? userPerformance.data.map( (value, index) => ({
        A: value.value,
        subject: ACTIVITY_FRENCH[index]
    })) : []

    if (loading) {
        return <div className="mainObjectif-loading"> Loading... </div>
    }

    if (!userPerformance) {
      <div className="mainObjectif-error">Error: {errorData}</div>
    }

    return <>
        <div className= {param === "/user/mocked/objectif" || param === "/user/12/objectif" || param === "/user/18/objectif" ? 'active mainObjectif' : "mainObjectif"} >
            { userPerformance &&
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataClean} >
                        <PolarGrid />
                        <PolarAngleAxis 
                            dataKey="subject" 
                            tick={{
                                fill: 'white',
                                fontSize: 12
                            }}
                        />
                        <Radar dataKey="A" fill="red" fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            }
        </div> 
    </>
}

export default Objectif
