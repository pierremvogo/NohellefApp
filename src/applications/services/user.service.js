import axios from 'axios'; 

const apiUrl = 'https://jsonplaceholder.typicode.com/users';


class UsersServices {

   getApi() {
        return axios.get(apiUrl);
    }
}
export default new UsersServices();