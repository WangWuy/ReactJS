import { HttpStatusCode } from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/auth-action.const";
import { getLocalStorage, setLocalStorage } from "../../services/auth/localstorage.service";

export const initialAuth = getLocalStorage('auth') || {
    access_token: ''
};

console.log(initialAuth);


export const authReducer = (state = initialAuth, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            state = {
                access_token: action.newState.access_token
            };
            setLocalStorage('auth', state);
            return state;
        case LOGIN_FAILURE:
            return state;
        case LOGOUT_SUCCESS:
            state = initialAuth;
            return state;
    }
}