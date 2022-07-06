import http from '../../http-common';

class PublicityService {
  
    createPublicity(payload) {
        return http.post("/publicities", payload);
    }
    editPublicity(publicityId) {
        return http.put(`/publicities/${publicityId}`);
    }
    deletePublicity(publicityId) {
        return http.delete(`/publicities/${publicityId}`);
    }
    filterPublicity() {
        return http.get(`/publicities/filters`);
    }
  
}

export default new PublicityService;
