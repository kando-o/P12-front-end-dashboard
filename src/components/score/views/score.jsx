import { useContext } from "react";
import { DataContext } from "../../../hook/context/context";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import "../assets/styles/score.css"

function Score () {
    const { userData, loadingData: loading, errorData} = useContext(DataContext)

    if (loading) return <div className="mainScore skeleton calorie_loading"> Loading... </div>

    if (userData === null) return <div className="mainScore_error">Error: {errorData}</div>


    const dataClean = userData && [
        {
            name : "score",
            value : userData.score ? userData.score : userData.todayScore
        }
        ,
        {
            name: 'antiScore', 
            value : 0.6
        }
    ]

    const COLORS = ['#FF0000', '#00000008']

    return <div className="mainScore">

        <h1 className="mainScore-titre">Score</h1>
        <div className="mainScore-content">
            <div className="mainScore-textContent">
                <div>
                    <span className="mainScore-text">{(userData.score ? userData.score : userData.todayScore) * 100 + '%'}</span> 
                    <br /> <p>de votre objectif</p>
                </div>
            </div>
        </div>

        <ResponsiveContainer>

            <PieChart>

                <Pie 
                    data={dataClean}
                    dataKey="value"
                    innerRadius={80}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={450}
                    cornerRadius={100}
                    cx="50%"
                    cy="50%"
                    >

                    {dataClean.map((entry, index) => (

                    <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                        strokeWidth={0}
                    />
                    ))}
                </Pie>

                <Pie
                data={dataClean}
                dataKey='value'
                outerRadius={75}
                fill='#FFFFFF'
                cx="50%"
                cy="50%"
                >
                </Pie>

            </PieChart>

        </ResponsiveContainer>

    </div>
}

export default Score
