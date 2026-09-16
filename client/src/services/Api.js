import axios from "axios";

const Api = axios.create({
    baseURL: "https://shopkart-react.onrender.com",
    withCredentials: true,
});

export default Api;