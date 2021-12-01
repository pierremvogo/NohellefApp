import axios from 'axios'; 
const user = JSON.parse(localStorage.getItem('user'));

export default axios.create({
    withCredentials: true,
    baseURL: "http://localhost:2000/api",
    headers: {
        "Content-type": "application/json",
        "x-access-token": user&&user.accessToken? user.accessToken: ''
    }
});