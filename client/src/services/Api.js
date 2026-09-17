import axios from "axios";

const Api = axios.create({
    // baseURL: "https://shopkart-react.onrender.com",
    baseURL: "http://localhost:5000",
    withCredentials: true,
});

export default Api;