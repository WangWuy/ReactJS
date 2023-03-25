import { useContext, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { removeLocalStorage, setLocalStorage } from "../../services/auth/localstorage.service"
import { logoutAction } from "../../store/actions/auth.action"
import { AuthContext, AuthDispatchContext, OAuth2Context } from "../../contexts/auth.context"

const Home = () => {
    const {logout, isAuthenticated} = useContext(OAuth2Context);
    const dispatch = useContext(AuthDispatchContext);
    const handleLogout = (e) => {
        dispatch(logoutAction());
    }

    useEffect(() => {
        if(isAuthenticated){
            logout();
        }

    },[isAuthenticated]);

    return (
        <Layout showSidebar>
            <h2>Home</h2>
            <Button onClick={handleLogout} variant="outline-primary">Logout</Button>
        </Layout>
    )
}
export default Home