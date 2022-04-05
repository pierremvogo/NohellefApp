import http from '../../http-common';

class ChatService {

    createNewMessage(payload) {
        return http.post("/chats", payload);
    }
  
}

export default new ChatService;
