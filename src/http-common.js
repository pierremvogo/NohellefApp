import axios from 'axios'; 
const user = JSON.parse(localStorage.getItem('user'));
const token = user&&user.accessToken? user.accessToken: '';

console.log("MY TOKEN AXIOS ");
console.log(token);
export default axios.create({
    withCredentials: false,
    baseURL: "http://38.242.220.206:6051/api/v1",
    headers: {
        "Content-type": "application/json",
         "Authorization": 'Bearer '+token,
    }
});