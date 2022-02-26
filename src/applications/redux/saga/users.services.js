const apiUrl = 'https://jsonplaceholder.typicode.com/users';

class UserService {

getApi() {
      return fetch(apiUrl, {
         method: 'GET',
         headers: {
            'Content-Type': 'application/json',
         }
      });
   }

}
export default new UserService;