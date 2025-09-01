import { useContext } from "react"
import {DataContext} from "../../../hook/context/context";
import {AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import "../assets/styles/radar.css"
import PropTypes from "prop-types"

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

CustomHover.propTypes = {
  points : PropTypes.array
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

CustomTooltip.propTypes = {
	payload : PropTypes.array,
	active : PropTypes.bool
}

const DAYS = [ 
	{name:""},
	{name:"L"},
	{name:"M"},
	{name:"M"},
	{name:"J"},
	{name:"V"},
	{name:"S"},
	{name:"D"}
]

function Radar () {

	const {userAverageSessions, loadingAvgSessions: loading, errorData} = useContext(DataContext)

	if (loading) {
		return <div className="mainRadar skeleton calorie_loading"> Loading... </div>
	}

	if (!userAverageSessions) {
		return <div className="mainRadar-error">Error: {errorData}</div>
	}

	const { sessions } = userAverageSessions

	const session = [
			{ // duplicate first entry - without name
				...sessions[0],
				day:0
			},
			// spread entries
			...sessions,
			{// duplicate last entry - without name
				...sessions[sessions.length-1],
				day: 0
			}
	].map((session) => ({
		session : session.sessionLength,
		name : DAYS[session.day].name
	}))

	return <div className="mainRadar">
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
					<stop offset="0%" stopColor="#fff4" />
					<stop offset={`${100}%`} stopColor="#FFF" />
				</linearGradient>
			</defs>

			</AreaChart>
		</ResponsiveContainer>
	</div>
}

export default Radar
