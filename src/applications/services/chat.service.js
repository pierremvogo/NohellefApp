import http from '../../http-common';

class ChatService {

    createNewMessage(payload) {
        return http.post("/chats", payload);
    }
    editMessageContent(messageId, payload) {
        return http.patch("/chats/${messageId}", payload);
    }
    deleteMessage(messageId) {
        return http.delete("/chats/${messageId}");
    }
    filterMessage(payload) {
        return http.post("/chats/filter", payload);
    }
  
}

export default new ChatService;
