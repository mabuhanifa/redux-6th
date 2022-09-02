import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://lwsreduxjson.herokuapp.com",
});

export default axiosInstance;
