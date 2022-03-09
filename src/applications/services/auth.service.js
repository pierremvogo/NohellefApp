import http from '../../http-common';

class AuthService {

    loginUser(payload) {
        return http.post("/auth/login", payload);
    }
    registerUser(payload) {
        return http.post("/auth/register", payload);
    }
    activeAccount(token) {
        return http.get(`/auth/active-account/${token}`);
    }
    getForgotPasswordToken(email) {
        return http.get(`/auth/password-forgot/${email}`);
    }
    resetPassword(token,payload) {
        return http.patch(`/auth/reset-password/${token}`, payload);
    }
    changePassword(id,payload) {
        return http.patch(`/auth/change-password/${id}`, payload);
    }
    lockAccount(id) {
        return http.put(`/auth/lock-account/${id}`);
    }
    unLockAccount(id) {
        return http.put(`/auth/unlock-account/${id}`);
    }
    adminCreateUser(payload) {
        return http.put(`/admin/users/create-user`, payload);
    }

}
export default new AuthService;
