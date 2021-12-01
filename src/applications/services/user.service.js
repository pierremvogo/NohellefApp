import { Redirect } from "react-router";
import http from "../../http-common";


class UsersServices {

    updateUserRoleAndFacture(id, payload) {
        return http.put(`/user/role/update/${id}`, payload);
    }

    verifyPhoneOTP(payload) {
        return http.post("user/verifyOTP", payload);
    }

    loginUser(payload) {
        return http.post("/user/login", payload);
    }

    getAllUsers() {
        return http.get("/user");
    }

    getUsersById(id) {
        return http.get(`/user/${id}`);
    }

    createUsers(payload) {
        return http.post("/user/create", payload);
    }

    updateUsers(id, payload) {
        return http.put(`/user/update/${id}`, payload);
    }

    deleteUsersById(id) {
        return http.delete(`/user/delete/${id}`);
    }

    deleteAllUsers() {
        return http.delete("/user/delete");
    }

    findUsersByEnterprise(enterprise) {
        return http.get(`/user?enterprise=${enterprise}`);
    }
}

export default new UsersServices();