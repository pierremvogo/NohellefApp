import http from '../../http-common';

class AbonnementService {
  
    createNewStudentAbonnement(payload) {
        return http.post("/abonnements", payload);
    }
    getStudentAbonnement(studentId) {
        return http.get(`/abonnements/${studentId}`);
    }
    editAbonnementStatus(abonnementId,payload) {
        return http.patch(`/abonnements/${abonnementId}`, payload);
    }
    listAllAbonnementForfait(id,payload) {
        return http.patch(`/abonnements/forfaits/all`);
    }
    createNewForfait(payload) {
        return http.patch(`/abonnements/forfaits/`, payload);
    }
    editForfait(forfaitId,payload) {
        return http.put(`/abonnements/forfaits/${forfaitId}`, payload);
    }
    deleteForfait(forfaitId) {
        return http.delete(`/abonnements/forfaits/${forfaitId}`);
    }
  
}

export default new AbonnementService;
