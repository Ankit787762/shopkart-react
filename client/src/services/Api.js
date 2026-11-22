import axios from "axios";

const Api = axios.create({
    baseURL: import.meta.env.DEV
        ? "http://localhost:5000"
        : "https://shopkart-react.onrender.com",
    withCredentials: true,
});

export function getProductImageUrl(image) {
    if (!image) return "";
    if (/^https?:\/\//i.test(image)) return image;

    const filename = image.replace(/^\/?uploads\//, "").replace(/^\/+/, "");
    return `${Api.defaults.baseURL}/uploads/${filename}`;
}

export default Api;