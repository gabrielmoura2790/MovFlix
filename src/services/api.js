import axios from "axios";

export const api_key = "8d2be68fb612147c99e7af782d48dde3";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
})

export default api;