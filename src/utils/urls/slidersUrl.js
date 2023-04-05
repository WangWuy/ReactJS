import {HTTP_METHODS, HTTP_URL, SLIDER_SCOPE } from "../../constants/default.const";

const GET_SLIDERS = `${SLIDER_SCOPE}/`;

export const getSlidersUrl = {
    url: `${HTTP_URL}/${GET_SLIDERS}`,
    method: HTTP_METHODS.GET
}; 