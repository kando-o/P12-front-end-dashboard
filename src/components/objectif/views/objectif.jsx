import { useContext } from "react";
import { DataContext } from "../../../hook/context/context";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import "../assets/styles/objectif.css"

function Objectif () {
    const {userPerformance , errorData} = useContext(DataContext)

    const dataClean = userPerformance && [
      {
        subject: userPerformance.kind,
        A: userPerformance.data.map(dataValue => dataValue.value),
        fullMark: 250,
      }
    ]

    if (!userPerformance) {
      <div>Error:{errorData}</div>
    }

    return <>
    <div className="mainObjectif">
    <ResponsiveContainer width="100%" height="100%">
    { dataClean &&
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dataClean}>
          <PolarGrid />
          <PolarAngleAxis dataKey={dataClean} />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
    }
    </ResponsiveContainer>
            <h1>Objectif</h1>
              { userPerformance && <div> {JSON.stringify(userPerformance)}</div>}
            { errorData && <div> {JSON.stringify(errorData)}</div>}
        </div>    
        </>
}

export default Objectif