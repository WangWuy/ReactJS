import { HttpStatusCode } from "axios";
import { GET_SLIDERS_FAILURE, GET_SLIDERS_SUCCESS } from "../../constants/sliders-action.const";

const initialSlider = {
    status: HttpStatusCode.Ok,
    data: [],
    message: ''
};


const slidersReducer = (state = initialSlider, action) => {
    const {payload, type} = action;
    switch (type) {
        case GET_SLIDERS_SUCCESS:
            state = {
                status: payload.status,
                message: null,
                data: payload.data
            };
            return state;
        case GET_SLIDERS_FAILURE:
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
export default slidersReducer;