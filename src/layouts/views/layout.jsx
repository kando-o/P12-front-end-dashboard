import Footer from "../../components/footer/views/footer"

import Navigation from "../../components/navigation/views/navigation"
import NavOverlay from "../../components/navigation/navOverlay/views/navOverlay"
import PropTypes from "prop-types"
import "../assets/styles/layout.css"

const Layout = ({children}) => {
    return (
        <div className="layout">
            <div className="layout_navigation">
                <>
                <Navigation />
                <NavOverlay />
                </>
            </div>
            <main className="layout_main">
                {children}
            </main>

            <footer className="layout_footer">
                <div className="copyright">
                    <Footer />
                </div>
            </footer>
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.object.isRequired
}

export default Layout
