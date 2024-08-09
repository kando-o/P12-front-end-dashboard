import { useContext } from "react";
import { DataContext } from "../../../hook/context/context";
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import "../assets/styles/score.css"

function Score () {

    const { userData, loading, errorData} = useContext(DataContext)
    const param = window.location.pathname

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

    if (loading) {
        return <div className="calorie_loading"> Loading... </div>
    }

    if (!userData) {
        return <div className="mainScore_error">Error: {JSON.stringify(errorData)}</div>
    }

    const COLORS = ['#FF0000', 'transparent']

    return <>
        <div className={param === "/user/mocked/score" || param === "/user/12/score" || param === "/user/18/score" ? "active mainScore" : "mainScore" }>

            <h1 className="mainScore-titre">Score</h1>
            <div className="mainScore-content">
                <div className="mainScore-textContent">
                { userData && 
                    <div>
                        <span className="mainScore-text">{(userData.score ? userData.score : userData.todayScore) * 100 + '%'}</span> 
                        <br /> <p>de votre objectif</p>
                    </div>
                }
                </div>
            </div>

            {<ResponsiveContainer>

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

            </ResponsiveContainer>}

        </div>
    </>
}

export default Score
