import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/auth-action.const";
import { removeLocalStorage, setLocalStorage } from "../../services/auth/localstorage.service";

export const loginAction = (state) => {
    //handle call api
    return state ? {type: LOGIN_SUCCESS}: {type: LOGIN_FAILURE};
}

export const logoutAction = async (logout) => {
    await setLocalStorage('auth', false);
    //handle logout
    return {
        type: LOGOUT_SUCCESS
    }
    
}