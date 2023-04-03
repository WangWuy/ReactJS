import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from "../../constants/categories-action.const";
import { sendRequest } from "../../helpers/http/send-request";
import { getCategoriesUrl } from "../../utils/urls/categoriesUrl";

export const getCategories = () => {
    return async (dispatch) => {
        try {
            const res = await sendRequest(getCategoriesUrl.url, {
                method: getCategoriesUrl.method,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            return dispatch({
                type: GET_CATEGORIES_SUCCESS,
                payload: res
            })
        }
        catch (err) {
            return dispatch({
                type: GET_CATEGORIES_FAILURE,
                payload: err
            })
        }
    }

}