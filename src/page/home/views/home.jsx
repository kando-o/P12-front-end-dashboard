import Objectif from "../../../components/objectif/views/objectif"
import Poids from "../../../components/poids/views/poids"
import Radar from "../../../components/radar/views/radar"
import Score from "../../../components/score/views/score"
import Calorie from "../../../components/widgets/calories/views/calorie";
import Lipide from "../../../components/widgets/lipides/views/lipide";
import Glucide from "../../../components/widgets/glucides/views/glucide";
import Proteine from "../../../components/widgets/proteines/views/proteine";
import "../assets/styles/home.css"
import { useContext, } from "react"
import { DataContext } from "../../../hook/context/context"

function Home () {
	const {errors, loadingData: loading, userData} = useContext(DataContext)

	// Fonction pour afficher toutes les erreurs importantes
	const renderErrors = () => {
		if (!errors || errors.length === 0) return null;
		
		// Filtrer les erreurs de connexion (les plus importantes)
		const connectionErrors = errors.filter(error => 
			error.message.includes("Erreur de connexion")
		);
		
		if (connectionErrors.length > 0) {
			return (
				<div style={{
					background: '#ffebee',
					border: '1px solid #f44336',
					borderRadius: '8px',
					padding: '16px',
					margin: '16px',
					color: '#c62828'
				}}>
					<h3>Erreurs de connexion détectées :</h3>
					<ul>
						{connectionErrors.map((error, index) => (
							<li key={index}>
								<strong>{error.type}:</strong> {error.message}
							</li>
						))}
					</ul>
					<p><strong>Solution :</strong> Vérifiez votre connexion réseau et assurez-vous que le serveur API est démarré sur le port 3000.</p>
				</div>
			);
		}
		
		// Afficher les autres erreurs
		return (
			<div style={{
				background: '#fff3e0',
				border: '1px solid #ff9800',
				borderRadius: '8px',
				padding: '16px',
				margin: '16px',
				color: '#e65100'
			}}>
				<h3>Erreurs détectées :</h3>
				<ul>
					{errors.map((error, index) => (
						<li key={index}>
							<strong>{error.type}:</strong> {error.message}
						</li>
					))}
				</ul>
			</div>
		);
	};

	// Si il y a des erreurs, afficher seulement les erreurs
	if (errors && errors.length > 0) {
		return (
			<div className="home">
				{renderErrors()}
			</div>
		);
	}

	// Sinon afficher la page normale
	return(
		<div className="home">
			<div className="profil">
				<h1 className={loading ? "skeleton title" : ""}>
					Bonjour <span>{userData && userData.userInfos.firstName}</span>
				</h1>
				<p className={loading ? "skeleton title" : ""}>
					Félicitation <span>{userData && userData.userInfos.firstName}</span>! Vous avez explosé vos objectifs hier
				</p>
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
	)
}

export default Home
