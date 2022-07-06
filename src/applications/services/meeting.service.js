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


    //for Meeting Messages
    createNewMeetingMessage(payload){
        return http.post("/meeting-messages", payload);
    }
    getMeetingMessageById(meetingId){
        return http.get(`/meeting-messages/${meetingId}`);
    }
    editMeetingMessage(messageId,payload){
        return http.patch(`/meeting-messages/${messageId}`, payload);
    }
    deleteMeetingMessage(messageId){
        return http.delete(`/meeting-messages/${messageId}`);
    }

  
}

export default new MeetingService;
