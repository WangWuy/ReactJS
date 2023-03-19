import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../store/contexts/auth.context";

const AuthRouter = ({ children, router = [] }) => {
    const auth = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={auth ? <Outlet /> : <Navigate to='/login' />}>
                    {children(router.filter(item => !item['passAuth']))}
                </Route>
                <Route element={!auth ? <Outlet /> : <Navigate to='/' />}>
                    {children(router.filter(item => item['passAuth']))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AuthRouter