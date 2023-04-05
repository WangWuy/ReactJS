import axios from 'axios';
import { HTTP_URL, SERVER_TIMEOUT } from '../../constants/default.const';
import { getLocalStorage } from '../../services/auth/localstorage.service';
import { loginUserUrl } from '../../utils/urls/authUrl';

const instance = axios.create({
    baseURL: HTTP_URL,
    timeout: SERVER_TIMEOUT,
    headers: {
        "Content-Type": "application/json",
    },
});


instance.interceptors.request.use(
    (config) => {
        const tokens = getLocalStorage('auth');
        if (tokens?.access_token) {
            if (
                config.url.indexOf(loginUserUrl) >= 0
            ) {
                return config;
            }
            config.headers["Authorization"] = `Bearer ${tokens.access_token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async(err) => {
        const originalConfig = err.config;
        if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;
            try {
                //TODO: Request to server get access token from refresh token

                /** handle... */
            } catch (_error) {
                return Promise.reject(_error);
            }
        }
        return Promise.reject(err.response);
    }
);


export const sendRequest = async (url, options) => {
    const res = await instance.request({
        url,
        ...options
    })
    return res;
}
