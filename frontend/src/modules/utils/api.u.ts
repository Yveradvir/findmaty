import axios from "axios";
import cookies from '../utils/cookies.u';

export const FindmatyApi = axios.create({
    baseURL: import.meta.env.VITE_API, withCredentials: true
})

FindmatyApi.interceptors.request.use(
    request => {
        if (import.meta.env.DEV) console.log("[ FindmatyApi:request::use#fulfilled > ", request);

        const csrf = cookies.get("access_csrf")
        if (csrf) request.headers["X-CSRF-Token"] = csrf

        return request
    },
    async error => {
        if (import.meta.env.DEV) console.error("[ LaunchedAxi:request::use#rejected > ", error);
        return Promise.reject(error)
    }
);

FindmatyApi.interceptors.response.use(
    async response => {
        if (import.meta.env.DEV) console.log("[ FindmatyApi:response::use#fulfilled > ", response);

        return response
    },
    async error => {
        if (import.meta.env.DEV) console.error("[ FindmatyApi:response::use#rejected > ", error);
        return Promise.reject(error)        
    }
);

export default FindmatyApi; 