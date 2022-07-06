import http from '../../http-common';

class NotificationService {
  
    createUserNotification(payload) {
        return http.post("/notifications", payload);
    }
    filterNotification(payload) {
        return http.post("/notifications/filter", payload);
    }
    deleteNotification(notificationId) {
        return http.delete(`/notifications/${notificationId}`);
    }
    
  
}

export default new NotificationService;
