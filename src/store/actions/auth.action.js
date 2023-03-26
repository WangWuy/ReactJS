import { HttpStatusCode } from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../../constants/auth-action.const";
import { GRANT_TYPE, OAUTH2_CLIENT_ID, OAUTH2_CLIENT_SECRET } from "../../constants/oauth2.const";
import { sendRequest } from "../../helpers/http/send-request";
import { loginUserUrl } from "../../utils/urls/authUrl";

export const loginAction = (data) => {
    return async (dispatch) => {
        try {
            const transformData = {
                ...data,
                client_id: OAUTH2_CLIENT_ID,
                client_secret: OAUTH2_CLIENT_SECRET,
                grant_type: GRANT_TYPE.PASSWORD
            }
            const form = new FormData();
            form.append('username', transformData.username);
            form.append('password', transformData.password);
            form.append('client_id', transformData.client_id);
            form.append('client_secret', transformData.client_secret);
            form.append('grant_type', transformData.grant_type);
            const res = await sendRequest(loginUserUrl.url, {
                data: form,
                method: loginUserUrl.method,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return dispatch({
                type: LOGIN_SUCCESS,
                payload: res
            })
        }
        catch (err) {
            return dispatch({
                type: LOGIN_FAILURE,
                payload: err
            })
        }
    }

}

export const logoutAction = () => {
    return async (dispatch) => {
        dispatch({
            type: LOGOUT_SUCCESS,
            payload: null
        })
        try {
            //TODO: Request to server to remove token
            /** handle.... */
        }
        catch (err) {
            return;
        }
    }

}