import axios from 'axios'; 
const user = JSON.parse(localStorage.getItem('user'));
const token = user&&user.accessToken? user.accessToken: '';

export default axios.create({
    withCredentials: false,
    baseURL: "http://38.242.220.206:6051/api/v1",
    headers: {
        "Content-type": "application/json",
        "x-access-token": token,
        "Authorization": `Bearer ${token}`
    }
});