import { useContext } from "react";
import { DataContext } from "../../../hook/context/context";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import "../assets/styles/objectif.css"

function Objectif () {

	const {userPerformance, loadingPerformance: loading, errorData} = useContext(DataContext)

	const ACTIVITY_FRENCH = [
		'Intensité',
		'Vitesse',
		'Force',
		'Endurance',
		'Energie',
		'Cardio'
	]

	if (loading) {
		return <div className="mainObjectif skeleton mainObjectif-loading"> Loading... </div>
	}

	if (userPerformance === null) {
		return <div className="mainObjectif-error">
			{errorData && errorData.includes("Failed to fetch") 
				? "Erreur de connexion : Impossible de récupérer les données de performance. Veuillez vérifier votre connexion réseau ou contacter le support."
				: `Erreur : ${errorData}`
			}
		</div>
	}

	const dataClean = userPerformance ? userPerformance.data.map( (value, index) => ({
		A: value.value,
		subject: ACTIVITY_FRENCH[index]
	})) : []

	return <>
		<div className= "mainObjectif" >
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
		</div> 
	</>
}

export default Objectif
