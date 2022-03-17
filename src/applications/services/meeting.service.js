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
    getMeetingByOwn(ownerId) {
        return http.get(`/meetings/list/${ownerId}`);
    }
  
}

export default new MeetingService;
