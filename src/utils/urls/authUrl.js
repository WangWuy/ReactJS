import { AUTH_SCOPE, HTTP_METHODS, HTTP_URL } from "../../constants/default.const";

const LOGIN_USER_URL = `${AUTH_SCOPE}/token/`;
const REGISTER_USER_URL = `${AUTH_SCOPE}/register`;
const OAUTH2_URL = `${AUTH_SCOPE}/oauth2-token`;

export const loginUserUrl = {
    url: `${HTTP_URL}/${LOGIN_USER_URL}`,
    method: HTTP_METHODS.POST
};

export const registerUserUrl = {
    url: `${HTTP_URL}/${REGISTER_USER_URL}`,
    method: HTTP_METHODS.POST
}

export const oauth2Url = {
    url: `${HTTP_URL}/${OAUTH2_URL}`,
    method: HTTP_METHODS.POST
}