import { BrowserRouter, Routes, Route } from "react-router-dom"
import PageHome from "../home/views/home.jsx"
import PagePoids from "../../components/poids/views/poids.jsx"
import PageScore from "../../components/score/views/score.jsx"
import PageRadar from "../../components/radar/views/radar.jsx"
import PageObjectif from "../../components/objectif/views/objectif.jsx"

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<PageHome />} /> 
            <Route path="/poids" element={<PagePoids />} /> 
            <Route path="/score" element={<PageScore />} /> 
            <Route path="/radar" element={<PageRadar />} /> 
            <Route path="/objectif" element={<PageObjectif />} /> 
        </Routes>
    </BrowserRouter>
    )
}

export default Router