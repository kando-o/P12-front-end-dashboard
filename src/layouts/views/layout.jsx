import Footer from "../../components/footer/views/footer"
import Navigation from "../../components/navigation/views/navigation"
import NavOverlay from "../../components/navigation/navOverlay/views/navOverlay"
import { Outlet } from "react-router-dom"

import PropTypes from "prop-types"
import "../assets/styles/layout.css"

const Layout = () => {
    
    return (

        <div className="layout">
            <div className="layout_navigation">
                <Navigation />
            </div>

            <div className="layout_bottom">
                <div className="layout_left">
                    <div></div>
                    <div className="layout_navigationOvelay"><NavOverlay/></div>
                    <footer className="layout_footer">
                        <div className="copyright">
                            <Footer />
                        </div>
                    </footer>
                </div>
                <main className="layout_main">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}

export default Layout
