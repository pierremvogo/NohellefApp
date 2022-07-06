import http from '../../http-common';

class LogService {

    filterLog(payload) {
        return http.post("/logs", payload);
    }
    deleteLog(logId) {
        return http.delete(`/logs/${logId}`);
    }
    getUserLoginLog(userId) {
        return http.get(`/logs/auth-logs/${userId}`, payload);
    }
    createUserHistory(payload) {
        return http.post(`/logs/history`, payload);
    }
    filterHistory(payload) {
        return http.post(`/logs/history/filter`, payload);
    }
    deleteUserHistory(historyId) {
        return http.delete(`/logs/history/${historyId}`);
    }
  
}

export default new LogService;
