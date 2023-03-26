import { memo } from "react"
import { Button } from "react-bootstrap"
import Layout from "../../components/Layout/Layout"
import { logoutAction } from "../../store/actions/auth.action"
import { useDispatch, useSelector } from "react-redux"

const Home = () => {
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