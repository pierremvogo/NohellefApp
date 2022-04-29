import http from '../../http-common';

class ForumService {
  
    createNewMessage(payload) {
        return http.post(`/forum/`, payload);
    }
    editMessageContent(messageId,payload) {
        return http.patch(`/forum/${messageId}`, payload);
    }
    deleteMessage(messageId) {
        return http.delete(`/forum/${messageId}`);
    }
    
  
}

export default new ForumService;
