import { useContext } from "react"
import {DataContext} from "../../../hook/context/context";
import {AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "../assets/styles/radar.css"

function Radar () {

    const {userAverageSessions, loading, errorData} = useContext(DataContext)
    const param = window.location.pathname

    const days = [ 
            {name:"L"},
            {name:"M"},
            {name:"M"},
            {name:"J"},
            {name:"V"},
            {name:"S"},
            {name:"D"}
        ]

    const session = userAverageSessions ? userAverageSessions.sessions.map((session, index) => ({
        session : session.sessionLength,
        name : days[index].name
    })) : []

    const CustomHover = ({ points }) => {
        return (
          <rect
            x={points[0].x}
            y="0"
            height='100%'
            width="100%"
            fill="rgba(0, 0, 0, 0.1)"
          />
        ) 
    }

    const CustomTooltip = ({ payload, active }) => {
        if (active) {
          return (
            <span className='mainRadar-tooltip'>
              {payload[0].value} min
            </span>
          )
        }
        return null
    }

    if (loading) {
        return <div className="calorie_loading"> Loading... </div>
    }

    if (!userAverageSessions) {
        return <div className="mainRadar-error">Error: {errorData}</div>
    }

    return <>
        {
        userAverageSessions &&
            <div className={param === "/user/mocked/radar" || param === "/user/12/radar" || param === "/user/18/radar" ? "active mainRadar" : "mainRadar" }>
                <h2> Durée moyenne des <br /> sessions </h2>

                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart 
                        width={300} 
                        height={300} 
                        data={session}
                        margin={{ top: 80 }}
                    >

                        <XAxis dataKey="name" tickLine={false} axisLine = {false} />

                        <Area 
                            type="monotone" 
                            dataKey="session" 
                            strokeWidth={2} 
                            fill="rgba(216, 216, 216, .1)"
                            dot={false} 
                            activeDot={{ r: 3 }} 
                            stroke="url(#lineGradient)" 
                        />

                        <Tooltip
                            content={<CustomTooltip/>}
                            cursor={<CustomHover />}
                        />

                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0" x2="200%" y2="0">
                                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
                                <stop offset={`${100}%`} stopColor="#FFF" />
                            </linearGradient>
                        </defs>

                    </AreaChart>

                </ResponsiveContainer>
            </div>
        }
    </>
}

export default Radar
