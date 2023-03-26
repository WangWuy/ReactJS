import { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context";

const AuthRouter = ({ children, router = [] }) => {
    const auth = useContext(AuthContext);
    console.log(auth);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={auth?.access_token? <Outlet /> : <Navigate to='/login' />}>
                    {children(router.filter(item => !item['passAuth']))}
                </Route>
                <Route element={!auth?.access_token ? <Outlet /> : <Navigate to='/' />}>
                    {children(router.filter(item => item['passAuth']))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default AuthRouter