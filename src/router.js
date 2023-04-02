import NotfoundError from "./pages/Errors/NotfoundError";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Registration from "./pages/Registration/Registration";
import Admissions from "./pages/Admissions/Admissions";

export const ROUTERS = [
  {
    path: "/",
    passAuth: false,
    element: < Home />,
  },
  {
    path: "/register",
    passAuth: true,
    element: <Register/>
  },
  {
    path: "/login",
    passAuth: true,
    default: true,
    element: <Login/>,
  },
  {
    path: "/forgot-password",
    passAuth: true,
    element: <div>Forgot password</div>
  },
  {
    path: "/search-result",
    passAuth: false,
    element: <h2> Search Result </h2>,
  },
  {
    path: "*",
    passAuth: false,
    element: <NotfoundError/>,
  },
  {
    path: "/registration",
    passAuth: false,
    element: < Registration />,
  },
  {
    path: "/admissions",
    passAuth: false,
    element: < Admissions />,
  },
];