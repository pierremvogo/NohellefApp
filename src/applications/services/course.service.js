import http from '../../http-common';

class CourseService {
    //for general course
    getAllCourseSpecialities() {
        return http.get("/courses/specialities");
    }
    getCourseById(id) {
        return http.get(`/courses/${id}`);
    }
    filterCourses(payload) {
        return http.post(`/courses/filter`, payload);
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
    editNoteComment(noteCommentId) {
        return http.patch(`/course-notes/comments/${noteCommentId}`);
    }
    deleteNoteComment(id) {
        return http.delete(`/course-notes/comments/${id}`);
    }
     filterCourseNoteComment(studentId,payload) {
        return http.post(`/course-notes/${studentId}/comments/filter-comment`, payload);
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


    //for main Courses
    createNewMainCourse(payload) {
        return http.post(`/main-courses`, payload);
    }
    deleteMainCourse(mainCourseId) {
        return http.delete(`/main-courses/${mainCourseId}`);
    }
    getMainCourseById(mainCourseId) {
        return http.get(`/main-courses/${mainCourseId}`);
    }
    filterMainCourse(payload) {
        return http.post(`/main-courses/filter`, payload);
    }

    createNewChapter(payload) {
        return http.post(`/main-courses/chapters`, payload);
    }
    deleteChapter(mainCourseChapterId) {
        return http.delete(`/main-courses/chapters/${mainCourseChapterId}`);
    }
    filterChapter() {
        return http.post(`/main-courses/chapters/filter`);
    }
    getChapterById(chapterId) {
        return http.get(`/main-courses/chapters/${chapterId}`);
    }





   
}

export default new CourseService;
