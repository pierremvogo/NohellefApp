import http from '../../http-common';

class AdminService {

    login(payload) {
        return http.post("/admin/users/admin-login", payload);
    }
    confirmLogin(code) {
        return http.get(`/admin/users/confirm-admin-login/${code}`);
    }
    loginInTutorAccount(tutorId) {
        return http.get(`/admin/login-tutor-account/${tutorId}`);
    }
    listAndFiltersUsers(payload) {
        return http.post("/admin/users",payload);
    }
    changeUserConnectionMode(id,payload) {
        return http.post(`/admin/users/change-tutor-connection-mode${id}`,payload);
    }
    createUser(payload) {
        return http.post("/admin/users/create-user",payload);
    }
    initTutorSpecialities(payload) {
        return http.get("/admin/init-tutor-specialities",payload);
    }
    addSpecialitiesToTutor(tutorId,payload) {
        return http.post(`/admin/tutor-specialities/${tutorId}`,payload);
    }
    removeSpecialitiesToTutor(tutorId,code) {
        return http.delete(`/admin/tutor-specialities/${tutorId}/${code}`);
    }

}

export default new AdminService;
