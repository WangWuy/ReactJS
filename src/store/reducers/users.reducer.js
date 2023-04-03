import { HttpStatusCode } from "axios";
import { GET_ME_FAILURE, GET_ME_SUCCESS, UPDATE_ME_FAILURE, UPDATE_ME_SUCCESS } from "../../constants/user-action.const";

const initialUser = {
    status: HttpStatusCode.Ok,
    data: null,
    message: ''
};


const usersReducer = (state = initialUser, action) => {
    const { payload, type } = action;
    switch (type) {
        case GET_ME_SUCCESS:
            state = {
                status: payload.status,
                message: null,
                data: payload.data
            };
            return state;
        case GET_ME_FAILURE:
            state = {
                status: payload.status,
                data: null,
                message: 'server error'
            }
            return state;
        case UPDATE_ME_SUCCESS:
            state = {
                status: payload.status,
                message: null,
                data: payload.data
            }
            return state;
        case UPDATE_ME_FAILURE:
            state = {
                status: payload.status,
                data: null,
                message: payload
            }
            return state;
        default:
            return state;
    }
}
export default usersReducer;