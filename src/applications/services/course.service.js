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
    getNoteByStudentId(studentId) {
        return http.get(`/course-notes/${studentId}`);
    }
    filterStudentNote(studentId) {
        return http.post(`/course-notes/${studentId}/filter`);
    }
    editNote(id,payload) {
        return http.patch(`/course-notes/${id}`, payload);
    }
    deleteNote(id) {
        return http.delete(`/course-notes/${id}`);
    }
    createCourseNoteComment(payload) {
        return http.post(`/course-notes/comments`, payload);
    }
    getCommentByCourseNote(courseNoteId) {
        return http.get(`/course-notes/comments/${courseNoteId}`);
    }
    editNoteComment(NoteCommentId) {
        return http.patch(`/course-notes/comments/${NoteCommentId}`);
    }
    deleteNoteComment(id) {
        return http.delete(`/course-notes/comments/${id}`);
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
    editComment(id, payload) {
        return http.patch(`/course-comments/${id}`, payload);
    }
    deleteComment(id) {
        return http.delete(`/course-comments/${id}`);
    }




   
}

export default new CourseService;
