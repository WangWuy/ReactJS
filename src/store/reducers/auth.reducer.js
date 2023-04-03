import { HttpStatusCode } from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/auth-action.const";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../../services/auth/localstorage.service";

const initialAuth = {
    status: HttpStatusCode.Ok,
    data: getLocalStorage('auth') || null,
    message: ''
};


const authReducer = (state = initialAuth, action) => {
    const {payload, type} = action;
    switch (type) {
        case LOGIN_SUCCESS:
            state = {
                status: payload.status,
                message: null,
                data: payload.data
            };
            setLocalStorage('auth', payload.data);
            return state;
        case LOGIN_FAILURE:
            state = {
                ...state,
                data: null,
                message: 'Tài khoản hoặc mật khẩu không đúng'
            }
            return state;
        case LOGOUT_SUCCESS:
            removeLocalStorage('auth');
            state = {
                ...state,
                data: null
            }
            return state;
        default:
            return state;
    }
}
export default authReducer;