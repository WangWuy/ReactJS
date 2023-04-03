import { GET_SLIDERS_FAILURE, GET_SLIDERS_SUCCESS } from "../../constants/sliders-action.const";
import { sendRequest } from "../../helpers/http/send-request";
import { getSlidersUrl } from "../../utils/urls/slidersUrl";

export const getSliders = () => {
    return async (dispatch) => {
        try {
            console.log(getSlidersUrl.url);
            const res = await sendRequest(getSlidersUrl.url, {
                method: getSlidersUrl.method,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return dispatch({
                type: GET_SLIDERS_SUCCESS,
                payload: res
            })
        }
        catch (err) {
            return dispatch({
                type: GET_SLIDERS_FAILURE,
                payload: err
            })
        }
    }

}