import http from '../../http-common';

class UsersServices {

    getUserById(id) {
        return http.get(`/users/${id}`);
    }
    editUser(id,payload) {
        return http.put(`/users/${id}`, payload);
    }
    filterTutors(payload) {
        return http.post(`/users/filter/tutors`, payload);
    }
    getTutorSpeciality(tutorId) {
        return http.get(`/users/tutor-specialities/${tutorId}`);
    }
    assignTutorToStudent(studentId,tutorId) {
        return http.patch(`/users/set-tutor/${studentId}/${tutorId}`);
    }
    assignParentToStudent(studentId,parentId) {
        return http.patch(`/users/set-parent/${studentId}/${parentId}`);
    }
    changeUserEmailAddress(id,payload) {
        return http.patch(`/users/${id}/change-email`, payload);
    }
    confirmNewEmailAddress(token) {
        return http.get(`/users/change-email/confirmation/${token}`);
    }
    getPaymentCardById(id) {
        return http.get(`/users/${id}/payment-cards`);
    }
    addNewPaymentCard(id,payload) {
        return http.post(`/users/${id}/payment-cards`, payload);
    }
    editPaymentCard(id,payload) {
        return http.put(`/users/paymentCards/${id}`, payload);
    }
    deleteUserPaymentCard(id) {
        return http.delete(`/users/paymentCards/${id}`);
    }

}
export default new UsersServices;
