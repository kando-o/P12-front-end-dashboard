import { useContext } from "react"
import { DataContext } from "../../../hook/context/context"
import { useNavigate } from "react-router-dom"

function PageSettings() {
    const {id} = useContext(DataContext)
    const navigate = useNavigate()

    const handleOption =  (e) => {
        const selectOption = e.target.value

        if (selectOption === 'mocked') {
            navigate('/user/mocked')
        } else if (selectOption === 'id12') {
            navigate('/user/12')
        } else if (selectOption === 'id18') {
            navigate('/user/18')
        }
    }

    return (<>
    <div className="dropdown">
        <label >Choise id:</label>
        <select name="idUser" className="idUser" onChange={handleOption} >
            <option value="mocked">User</option>
            <option value="mocked">mocked</option>
            <option value="id12">id_12</option>
            <option value="id18">id_18</option>
        </select>
    </div>
    </>
    )
}

export default PageSettings