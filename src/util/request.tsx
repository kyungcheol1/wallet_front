import axios from "axios";

const request = axios.create({
    baseURL: "http://localhost:8545",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default request;

