import { useContext, useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate, Outlet, useLocation } from "react-router-dom"
import { DataContext } from "../hook/context/context"

import Layout from "../layouts/views/layout";

import PageProvider from "../page/pageProvider/views/PageProvider.jsx"
import PageHome from "../page/home/views/home.jsx"
import PageSettings from "../page/pageSettings/views/pageSettings.jsx"
import PageNotFound from "../page/pageNotFound/views/PageNotFound.jsx"

import PagePoids from "../components/poids/views/poids.jsx"
import PageScore from "../components/score/views/score.jsx"
import PageRadar from "../components/radar/views/radar.jsx"
import PageObjectif from "../components/objectif/views/objectif.jsx"
import "./assets/styles/router.css"

const Dispatcher = ()=> {
    const navigate = useNavigate()
    const location = useLocation()
    const {id} = useContext(DataContext)

    useEffect(() => {
        if (location.pathname === "/") {
            if (id) {
                navigate (`/user/${id}`)
            } else {
                navigate ("/reglage")
            }
        }
    }, [id, navigate , location.pathname])

    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}

const NotFound = () => {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate ("/user/mocked")
        }, 2000)
    }, [navigate])
}

const SingleComponentLayout = () => {
    return (
        <div className="layout-component">
            <div className="layout-component-wrapper">
                <Outlet/>
            </div>
        </div>
    )
}

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            {/* connected routes */}
            <Route path="/" element={<Dispatcher />}>
                <Route path="reglage" element={<PageSettings />} /> 
                <Route path="user" element={<PageProvider/>}>
                    <Route path=":id">
                        <Route index element={<PageHome />} />
                        <Route path="*" element={<SingleComponentLayout />}>
                            <Route path="poids" element={<PagePoids />} />
                            <Route path="score" element={<PageScore />} />
                            <Route path="radar" element={<PageRadar />} />
                            <Route path="objectif" element={<PageObjectif />} /> 
                        </Route>
                    </Route>
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
