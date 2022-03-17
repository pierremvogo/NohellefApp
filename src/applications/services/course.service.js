import http from '../../http-common';

class CourseService {
    //for general course
    getAllCourseSpecialities() {
        return http.get("/courses/specialities");
    }
    getCourseById(id) {
        return http.get(`/courses/${id}`);
    }
    filterCourses() {
        return http.get(`/courses/filter`);
    }

    //for course Notes
    createNote(payload) {
        return http.post(`/course-notes`, payload);
    }
    getNotesByStudentId(studentId) {
        return http.get(`/course-notes/${studentId}`);
    }
    editNote(id,payload) {
        return http.patch(`/course-notes/${id}`, payload);
    }
    editNote(id,payload) {
        return http.delete(`/course-notes/${id}`);
    }

    //for course Exercices
    filterExercice() {
        return http.post(`/course-exercises/filter`);
    }
    getExerciseById(id) {
        return http.get(`/course-exercises/${id}`);
    }

    //for course Comments
    createComment(payload) {
        return http.post(`/course-comments`, payload);
    }
    getCommentByCourseId(courseId) {
        return http.get(`/course-comments/${courseId}`);
    }
    editComment(id) {
        return http.patch(`/course-comments/${id}`);
    }
    deleteComment(id) {
        return http.delete(`/course-comments/${id}`);
    }




   
}

export default new CourseService;
