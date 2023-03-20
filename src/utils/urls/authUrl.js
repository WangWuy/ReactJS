import { AUTH_SCOPE, HTTP_METHODS } from "../../constants/default.const";

const LOGIN_USER_URL = `${AUTH_SCOPE}/login`;
const REGISTER_USER_URL = `${AUTH_SCOPE}/register`;
const OAUTH2_URL = `${AUTH_SCOPE}/oauth2-token`;

export const loginUserUrl = {
    url: `${serverUrl}/${LOGIN_USER_URL}`,
    method: HTTP_METHODS.POST
};

export const registerUserUrl = {
    url: `${serverUrl}/${REGISTER_USER_URL}`,
    method: HTTP_METHODS.POST
}

export const oauth2Url = {
    url: `${serverUrl}/${OAUTH2_URL}`,
    method: HTTP_METHODS.POST
}