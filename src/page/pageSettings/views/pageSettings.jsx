import { useCallback, useContext, useEffect } from "react"
import { DataContext } from "../../../hook/context/context"
import { useNavigate } from "react-router-dom"

function PageSettings() {
	const {id, setId} = useContext(DataContext)
	const navigate = useNavigate()

	useEffect(() => {
		if (!id) {
			setId("mocked")
			navigate(`/user/mocked`)
		}
	}, [id, setId, navigate])

	const handleOption = useCallback((e) => {
		// vérifier DataContext avant
		const selectOption = e.target.value
		setId(selectOption)
		navigate(`/user/${selectOption}`)
	}, [setId, navigate])

	return (<>
		<div className="dropdown">
			<label >Choise id:</label>
			<select name="idUser" className="idUser" value={id ? id : "mocked"} onChange={handleOption} >
				<option value="mocked">mocked</option>
				<option value="12">id_12</option>
				<option value="18">id_18</option>
			</select>
		</div>
	</>
	)
}

export default PageSettings
