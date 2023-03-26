import { memo, useContext, useEffect } from "react"
import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import Layout from "../../components/Layout/Layout"
import { removeLocalStorage, setLocalStorage } from "../../services/auth/localstorage.service"
import { logoutAction } from "../../store/actions/auth.action"
import { AuthContext, AuthDispatchContext, OAuth2Context } from "../../contexts/auth.context"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
    const auth = useSelector(state => state.authReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = (e) => {
        dispatch(logoutAction());
    }
    
    return (
        <Layout showSidebar>
            <h2>Home</h2>
            <Button onClick={handleLogout} variant="outline-primary">Logout</Button>
        </Layout>
    )
}
export default memo(Home);