import axios from 'axios';

export default ()=>{
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem('auth');
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
    return axios.create({
        headers: {
            Authorization: "Bearer " + localStorage.getItem('auth')
        },
        baseURL:'http://localhost:8080/'
    })
}