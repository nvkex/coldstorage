import axios from 'axios';
import { BACKEND_BASE_URL } from '../constants/URLs'

const get = (endPointURL, headers = {}) => {
    const url = getUrl(endPointURL);
    return axios.get(url, { headers })
}

const post = (endpointUrl, body = {}, headers = {}, config = {}) => {
    const url = getUrl(endpointUrl);
    return axios.post(url, body, { headers, ...config })
}

const put = (endpointUrl, body = {}, headers = {}, config = {}) => {
    const url = getUrl(endpointUrl);
    return axios.put(url, body, { headers, ...config })
}

const handleError = (error) => {
    // eslint-disable-next-line no-throw-literal
    throw (error && error.response) ? { data: error.response.data, status: error.response.status } : {};
}

const getUrl = (endpointUrl) => {
    return `${BACKEND_BASE_URL}${endpointUrl}`;
}

const methods = {
    get,
    post,
    put,
    handleError
}

export default methods