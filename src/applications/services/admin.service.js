import http from '../../http-common';

class AdminService {

    login(payload) {
        return http.post("/admin/users/admin-tutor-login", payload);
    }
    confirmLogin(code) {
        return http.get(`/admin/users/confirm-admin-tutor-login/${code}`);
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

    createCourse(payload) {
        return http.post(`/admin/courses`, payload);
    }

    editCourse(id,payload) {
        return http.put(`/admin/courses/${id}`, payload);
    }

    deleteCourse(id) {
        return http.delete(`/admin/courses/${id}`);
    }

    createCourseExercice(payload) {
        return http.post(`/admin/course-exercices`, payload);
    }

    setCourseExercice(exerciseId,payload) {
        return http.patch(`/admin/course-exercices/${exerciseId}`, payload);
    }

    addQuizQuestion(exerciseId,payload) {
        return http.post(`/admin/quiz-add-question/${exerciseId}`, payload);
    }

    editQuizQuestion(questionId,questionText) {
        return http.patch(`/admin/quiz-edit-question-text/${questionId}/${questionText}`);
    }

    deleteQuizQuestion(id) {
        return http.delete(`/admin/quiz-delete-question/${id}`);
    }

    answerToQuestion(questionId,payload) {
        return http.post(`/admin/quiz-add-question-answer/${questionId}`, payload);
    }

    editAnswerToQuestion(answerId,answerText) {
        return http.patch(`/admin/quiz-edit-anwser-text/${answerId}/${answerText}`);
    }

    deleteQuizAnswer(id) {
        return http.delete(`/admin/quiz-delete-answer/${id}`);
    }

}

export default new AdminService;
