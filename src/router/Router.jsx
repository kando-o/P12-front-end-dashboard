import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import PageProvider from "../page/pageProvider/views/PageProvider.jsx"
import PageHome from "../page/home/views/home.jsx"
import PagePoids from "../components/poids/views/poids.jsx"
import PageScore from "../components/score/views/score.jsx"
import PageRadar from "../components/radar/views/radar.jsx"
import PageObjectif from "../components/objectif/views/objectif.jsx"
import PageNotFound from "../page/pageNotFound/views/PageNotFound.jsx"

const Dispatcher = ()=> {
    console.log("re-route")
    const navigate = useNavigate()
    useEffect(() => {
        navigate ("/user/mocked")
    }, [navigate]) 
    return <></>
}

const NotFound = () => {
    console.log("re-route")
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            console.log("ps : fuck you asshole")
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
            <Route path="user/:id" element={<PageProvider />}>
                <Route index element={<PageHome />} />
                <Route path="poids" element={<PagePoids />} />
                <Route path="score" element={<PageScore />} />
                <Route path="radar" element={<PageRadar />} />
                <Route path="objectif" element={<PageObjectif />} /> 
                <Route path="*" index element={<PageNotFound />} />
            </Route>
            {/* unconnected routes */}
            <Route index element={<Dispatcher />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    </BrowserRouter>
    )
}

export default Router
