import axios from "axios";

//Axios API instance
const api = axios.create({
    baseURL: 'https://module-c-5-solution.dineease.com/api/v1',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
});

export default api;