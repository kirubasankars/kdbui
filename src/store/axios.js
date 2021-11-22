import axios from "axios"

let baseURL = window.location.origin

if (!baseURL.endsWith(":8001")) {
    baseURL = baseURL + "/api"
}

const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance