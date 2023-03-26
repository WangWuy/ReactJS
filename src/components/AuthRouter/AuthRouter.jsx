import { memo, useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Outlet, Route, Routes } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context";

const AuthRouter = ({ children, router = [] }) => {
    const auth = useSelector(state => state.authReducer);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={auth.data?.access_token? <Outlet /> : <Navigate to='/login' />}>
                    {children(router.filter(item => !item['passAuth']))}
                </Route>
                <Route element={!auth.data?.access_token ? <Outlet /> : <Navigate to='/' />}>
                    {children(router.filter(item => item['passAuth']))}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default memo(AuthRouter);