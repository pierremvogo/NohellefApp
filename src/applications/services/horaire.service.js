import http from '../../http-common';

class HoraireService {
  
    createNewHoraire(payload) {
        return http.post("/horaires", payload);
    }
    editUserHoraire(horaireId) {
        return http.put(`/horaires/${horaireId}`);
    }
    deleteHoraire(horaireId) {
        return http.delete(`/horaires/${horaireId}`);
    }
    getHoraireListByUser(userId) {
        return http.get(`/horaires/${userId}`);
    }
  
}

export default new HoraireService;
