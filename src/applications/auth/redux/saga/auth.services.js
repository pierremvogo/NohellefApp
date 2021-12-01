import http from '../../../../http-common';

/**
 * @description Authentication API calls. 
 */

class AuthService {
    /**
     * @description sign in user.
     * @param {username, password} payload 
     * @returns Promise
     */
     loginUser(payload) {
        return http.post("/user/login", payload)
    }

    /**
     * @description Register a user.
     * @param {username, lastname, password, age, enterprise} payload 
     * @returns Promise
     */
     createUsers(payload) {
        return http.post("/user/create", payload);
    }

    /**
     * @description logout user.
     */

    logoutUser() {
       localStorage.removeItem("user");
    }

}
export default new AuthService;
