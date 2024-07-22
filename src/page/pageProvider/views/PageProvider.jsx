import { Outlet, useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../hook/context/context";

function PageProvider() {
    const {id} = useParams()
    const {setId} = useContext(DataContext)
    useEffect(() => {
        setId(id)
    }, [id, setId])

    return (
        <Outlet id={id} />
    )
}

export default PageProvider;