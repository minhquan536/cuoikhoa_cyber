import axios from "axios";
import { ACCESS_TOKEN, TOKEN_USER } from "../contants";
import { getLocal } from "../utils";

const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc"
const BASE_URL_USE = "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung"

export const axiosWithoutAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000,
});

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000,
})

axiosAuth.interceptors.request.use(
    (config) => {
        config.headers.TokenCybersoft = `${getLocal(ACCESS_TOKEN)}`
        return config
    },
    (err) => {
        console.log(err);
        return Promise.reject(err)
    }
)

export const axiosAuthUser = axios.create({
    baseURL: BASE_URL_USE,
    timeout: 180_000,
})
axiosAuthUser.interceptors.request.use(
    (config) => {
        config.headers.TokenCybersoft = `${getLocal(ACCESS_TOKEN)}`
        return config
    },
    (err) => {
        console.log(err);
        return Promise.reject(err)
    }
)

export const axiosAuthUser2 = axios.create({
    baseURL: BASE_URL_USE,
    timeout: 180_000,
})
axiosAuthUser2.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${getLocal(TOKEN_USER)}`,
        config.headers.TokenCybersoft = `${getLocal(ACCESS_TOKEN)}`
        return config
    },
    (err) => {
        console.log(err);
        return Promise.reject(err)
    }
)

export const axiosAuthUser3 = axios.create({
    baseURL: BASE_URL,
    timeout: 180_000,
})
axiosAuthUser3.interceptors.request.use(
    (config) => {
        config.headers.Authorization = `Bearer ${getLocal(TOKEN_USER)}`,
        config.headers.TokenCybersoft = `${getLocal(ACCESS_TOKEN)}`
        return config
    },
    (err) => {
        console.log(err);
        return Promise.reject(err)
    }
)

