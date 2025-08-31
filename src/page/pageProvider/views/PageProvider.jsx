import { Outlet, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../hook/context/context";

//useParams(): lit :id depuis l’URL (ex: /user/12 → id = "12").
//useContext(DataContext): récupère setId exposé par le DataProvider.
//useEffect([...]): à chaque changement d’id, appelle setId(id) → le DataProvider détecte la nouvelle valeur et lance les fetchs correspondants.
//<Outlet />: rend les routes enfants (ex: la page Home, Poids, Score…).
function PageProvider() {
	const {id} = useParams()
	const {setId} = useContext(DataContext)

	useEffect(() => {
		setId(id)
	}, [id, setId])

	return (
			<Outlet />
	)
}

export default PageProvider;
