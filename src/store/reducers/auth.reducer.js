import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/auth-action.const";
import { getLocalStorage, setLocalStorage } from "../../services/auth/localstorage.service";

export const initialAuth = getLocalStorage('auth') || false;

console.log(initialAuth, 'ini');

export const authReducer = (state, action = initialAuth) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            state = true;
            setLocalStorage('auth', state);
            return state;
        case LOGIN_FAILURE:
            state = initialAuth;
            setLocalStorage('auth', state);
            return state;
        case LOGOUT_SUCCESS:
            state = initialAuth;
            return state;
    }
}