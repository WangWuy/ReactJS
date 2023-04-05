import {HTTP_METHODS, HTTP_URL, SLIDER_SCOPE, USER_SCROPE } from "../../constants/default.const";

const GET_CURRENT_USER = `${USER_SCROPE}/current-user/`;
const UPDATE_CURRENT_USER = `${USER_SCROPE}/`;

export const getMeUrl = {
    url: `${HTTP_URL}/${GET_CURRENT_USER}`,
    method: HTTP_METHODS.GET
};

export const updateMeUrl = {
    url: `${HTTP_URL}/${UPDATE_CURRENT_USER}`,
    method: HTTP_METHODS.PUT
};