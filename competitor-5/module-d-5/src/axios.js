import axios from "axios";

const api = axios.create({
    baseURL: 'https://module-c-5-solution.dineease.com/api/v1',
    headers: [
        `Authorization: Bearer a31405d272b94e5d12e9a52a665d3bfe`,
    ]
});

export default api;