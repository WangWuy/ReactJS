import { HttpStatusCode } from "axios";
import { GET_CATEGORIES_FAILURE, GET_CATEGORIES_SUCCESS } from "../../constants/categories-action.const";

const initialCategories = {
    status: HttpStatusCode.Ok,
    data: [],
    message: ''
};


const categoriesReducer = (state = initialCategories, action) => {
    const {payload, type} = action;
    switch (type) {
        case GET_CATEGORIES_SUCCESS:
            state = {
                status: payload.status,
                message: null,
                data: payload.data
            };
            return state;
        case GET_CATEGORIES_FAILURE:
            state = {
                ...state,
                data: [],
                message: 'server error'
            }
            return state;
        default:
            return state;
    }
}
export default categoriesReducer;