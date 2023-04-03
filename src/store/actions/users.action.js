import { GET_ME_FAILURE, GET_ME_SUCCESS, UPDATE_ME_FAILURE, UPDATE_ME_SUCCESS } from "../../constants/user-action.const";
import { sendRequest } from "../../helpers/http/send-request";
import { getMeUrl, updateMeUrl } from "../../utils/urls/usersUrl";

export const getMeAction = () => {
    return async (dispatch) => {
        try {
            const res = await sendRequest(getMeUrl.url, {
                method: getMeUrl.method,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return dispatch({
                type: GET_ME_SUCCESS,
                payload: res
            });
        }
        catch (err) {
            return dispatch({
                type: GET_ME_FAILURE,
                payload: err
            })
        }
    }

}

export const updateProfileAction = (data, userId, navigate = () => {}) => {
    return async (dispatch) => {
        try {
            const transformData = {
                ...data
            }
            const form = new FormData();
            form.append('username', transformData.username);
            form.append('password', transformData.password);
            form.append('first_name', transformData.firstName);
            form.append('last_name', transformData.lastName);
            form.append('avatar', transformData.avatar);
            form.append('email', transformData.email);
            console.log(transformData,userId);
            const res = await sendRequest(`${updateMeUrl.url}${userId}/`, {
                data: form,
                method: updateMeUrl.method,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if(!data?.avatar){
                navigate('/');
            }

            return dispatch({
                type: UPDATE_ME_SUCCESS,
                payload: res
            })
        }
        catch (err) {
            return dispatch({
                type: UPDATE_ME_FAILURE,
                payload: err
            })
        }
    }
}