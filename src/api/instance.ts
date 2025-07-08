import axios from "axios";
import { applyInterceptors } from "./request";

const BASE_URL = import.meta.env.VITE_BASE_URL + "/api";

// 일반 서버 주소로 요청 보낼 시
const defaultInstance = axios.create({
  baseURL: BASE_URL,
});

// news section
const newsInstance = axios.create(defaultInstance.defaults);
newsInstance.defaults.baseURL += "/news";
applyInterceptors(newsInstance);

// words section
const wordsInstance = axios.create(defaultInstance.defaults);
newsInstance.defaults.baseURL += "/words";
applyInterceptors(wordsInstance);

// user section
const userInstance = axios.create(defaultInstance.defaults);
newsInstance.defaults.baseURL += "/user";
applyInterceptors(userInstance);

export { defaultInstance, newsInstance, wordsInstance, userInstance };
