import { useContext } from "react";
import {DataContext} from "../../../hook/context/context";
import { BarChart, Bar, XAxis, CartesianGrid,Tooltip, YAxis, ResponsiveContainer } from 'recharts';
import PropTypes from "prop-types"
import "../assets/styles/poids.css"


const CustomTooltip = ({ payload, active }) => {
    if (active) {
      return (
        <div className="mainPoids-tooltipContainer">
          <div className='mainPoids-tooltipItem'>
            {payload[0].value} kg
          </div>
          <div className='mainPoids-tooltipItem'>
            {payload[1].value} Kcal
          </div>
        </div>
      )
    }
}

CustomTooltip.propTypes = {
    payload : PropTypes.array,
    active : PropTypes.bool
}

function Poids () {

    const {userActivityData, loadingActivity: loading, errorData} = useContext(DataContext)	

    const data =  userActivityData ? userActivityData.sessions.map( (item, index) => ({
        name : index + 1,
        kg : item.kilogram,
        kCal : item.calories
    })) : []

    if (loading) {
        return <div className="mainPoids skeleton mainPoids-loading"> Loading... </div>
    }

    if (userActivityData === null) {
        return <div className="mainPoids-error">Error: test {errorData}</div>
    }

    return(<>
        <div className= "mainPoids">
            <div className="mainPoids-text">
                <h2>Activité quotidienne</h2>
                <ul>
                    <li className="mainPoids-poid">Poids (kg)</li>
                    <li className="mainPoids-kCal"> Calories brûlées (kCla)</li>
                </ul>
            </div>

            <ResponsiveContainer width="100%" height="100%">

                <BarChart
                    data={data}
                    width={500}
                    height={300}
                    margin={{
                        right: 20,
                        left: 20,
                        bottom: 100,
                    }}
                >

                    <Tooltip
                        content={<CustomTooltip/>}
                    />

                    <CartesianGrid strokeDasharray="3" verticalCoordinatesGenerator = "false" />

                    <XAxis dataKey="name" tick={{fill: '#979797'}} axisLine = {false} tickMargin={11} tickLine={false} />

                    <YAxis orientation="right" tick={{fill: '#979797'}} axisLine = {false} tickMargin={15} tickLine={false} />

                    <Tooltip content={CustomTooltip} />

                    <Bar dataKey="kg" fill="#282D30" barSize="10" radius={[50, 50 ,0 ,0]} />

                    <Bar dataKey="kCal" fill="#E60000" barSize="10" radius={[50, 50 ,0 ,0]} />

                </BarChart>
            </ResponsiveContainer>
        </div> 
    </>
    )
}

export default Poids
