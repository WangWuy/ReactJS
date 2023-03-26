import axios from 'axios';
import { HTTP_URL, SERVER_TIMEOUT } from '../../constants/default.const';

const api = axios.create({
    baseURL: HTTP_URL,
    timeout: SERVER_TIMEOUT,
    headers: {
        "Content-Type": "application/json",
    },
});





const getRequest = async (url, data) => {
    const res = await api.get(url, {
        data
    });
    return res;
}

const postRequest = async (url, data) => {
    console.log(data);
    const res = await api.request({
        method: 'POST',
        data,
        headers: {
            "Content-Type": 'multipart/form-data'
        }
    })
    return res;
}
export {
    getRequest,
    postRequest
}
