import axios from "axios";

const Api = axios.create({
    baseURL: "https://shopkart-react.onrender.com",
    Credentials: true,
});

export default Api;