import { Outlet, useParams } from "react-router-dom";
import Layout from "../../../layouts/views/layout";
import { useContext, useEffect } from "react";
import { DataContext } from "../../../hook/context/context";

function PageProvider() {
    const {id} = useParams()
    const {setId} = useContext(DataContext)
    useEffect(() => {
        setId(id)
    }, [id, setId])

    return (
        <Layout>
            {<Outlet />}
        </Layout>
    );
}

export default PageProvider;