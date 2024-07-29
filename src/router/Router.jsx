import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate, Outlet, useParams, useLocation } from "react-router-dom"
import Layout from "../layouts/views/layout";

import PageProvider from "../page/pageProvider/views/PageProvider.jsx"
import PageHome from "../page/home/views/home.jsx"
import PagePoids from "../components/poids/views/poids.jsx"
import PageScore from "../components/score/views/score.jsx"
import PageRadar from "../components/radar/views/radar.jsx"
import PageObjectif from "../components/objectif/views/objectif.jsx"
import PageNotFound from "../page/pageNotFound/views/PageNotFound.jsx"
import PageSettings from "../page/pageSettings/views/pageSettings.jsx"

const Dispatcher = ()=> {
    const navigate = useNavigate()
    const {id} = useParams()
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === "/") {
            navigate ("/user/reglage")
        }
        if (id === "mocked") {
            navigate ("/user/mocked")
        }
        if (id === "12") {
            navigate ("/user/12")
        }
        if (id === "19") {
            navigate ("/user/18")
        }
    }, [id, navigate , location.pathname])

    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

const NotFound = () => {
    console.log("not found")
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate ("/user/no_user")
        }, 2500)
    }, [navigate]) 
    return <div>This page does not exist ... in this universe or another</div>
}

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            {/* connected routes */}
            <Route path="/" element={<Dispatcher />}>
                <Route path="user" element={<PageProvider/>}>
                    <Route path=":id" element={<PageHome />} />
                    <Route path="reglage" element={<PageSettings />} /> 
                    <Route path=":id/poids" element={<PagePoids />} />
                    <Route path=":id/score" element={<PageScore />} />
                    <Route path=":id/radar" element={<PageRadar />} />
                    <Route path=":id/objectif" element={<PageObjectif />} /> 
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Route>

            {/* unconnected routes */}
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router
