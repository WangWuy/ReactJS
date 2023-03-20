import { IS_SHOW_SIDEBAR } from "../../constants/default.const"
import Footer from "../Footer/Footer"
import Header from "../Header/Header"
import Sidebar from "../Sidebar/Sidebar"

const Layout = ({ children, showSidebar = IS_SHOW_SIDEBAR}) => {
    const isShowSidebar = showSidebar ? <Sidebar/> : <></>
    return (
        <>
        <div className="theme-layout">
            <Header  />
            {isShowSidebar}
            {children}
            <Footer />
        </div>
        </>
    )
}

export default Layout