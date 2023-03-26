import { HttpStatusCode } from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/auth-action.const";
import { GRANT_TYPE, OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET } from "../../constants/oauth2.const";
import { getRequest, postRequest } from "../../helpers/http/send-request";
import { removeLocalStorage, setLocalStorage } from "../../services/auth/localstorage.service";
import { loginUserUrl } from "../../utils/urls/authUrl";

export const loginAction = async (data) => {
    // try {
        const transformData = {
            ...data,
            client_id: OAUTH2_CLIENT_ID,
            client_secret: OAUTH2_CLIENT_SECRET,
            grant_type: GRANT_TYPE.PASSWORD
        }
        const form = new FormData();
        form.append('username', transformData.username);
        form.append('password',transformData.password);
        form.append('client_id',transformData.client_id);
        form.append('client_secret',transformData.client_secret);
        form.append('grant_type',transformData.grant_type);
        console.log(form.entries());
        const res = await postRequest(loginUserUrl.url, form);

        console.log(res);
        // return {
        //     type: LOGIN_SUCCESS,
        //     newState: res.data
        // };
    // }
    // catch (err) {
    //     console.log(err)
    //     return {
    //         type: LOGIN_FAILURE,
    //         newState: err.message
    //     }
    // }

    // return state ? {type: LOGIN_SUCCESS}: {type: LOGIN_FAILURE};
}

export const logoutAction = async (logout) => {
    setLocalStorage('auth', false);
    //handle logout
    return {
        type: LOGOUT_SUCCESS
    }

}