import http from '../../http-common';

class MeetingService {
  
    createWebConference(payload) {
        return http.post("/meetings", payload);
    }
    getMeetingById(meetingId) {
        return http.get(`/meetings${meetingId}`);
    }
    editMeeting(meetingId,payload) {
        return http.patch(`/meetings${meetingId}`, payload);
    }
    getMeetingByTutorIdOrStudentId(userId) {
        return http.get(`/meetings/list/${userId}`);
    }
    addMeetingRecordFile(meetingId,mediaId) {
        return http.get(`/meetings/${meetingId}/add-media/${mediaId}`);
    }
    getMeetingRecordFile(meetingId) {
        return http.get(`/meetings/${meetingId}/recorded-files`);
    }
  
}

export default new MeetingService;
