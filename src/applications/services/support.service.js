import http from '../../http-common';

class SupportService {

    createNewSupportMessage(payload) {
        return http.post("/supports-message", payload);
    }
    editSupportMessageContent(supportMessageId, payload) {
        return http.patch("/supports-messages/${supportMessageId}", payload);
    }
    deleteSupportMessage(supportMessageId) {
        return http.delete("/supports-message/${supportMessageId}");
    }
    filterSupportMessage(payload) {
        return http.post("/supports-message/filter", payload);
    }
  
}

export default new SupportService;
