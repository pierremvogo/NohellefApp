import http from '../../http-common';

class MediaService {
  
    createMedia(payload) {
        return http.post("/medias", payload);
    }
    getMediaById(id) {
        return http.get(`/medias/${id}`);
    }
    deleteMedia(id) {
        return http.delete(`/medias/${id}`);
    }
    updateMediaName(id,payload) {
        return http.patch(`/medias/${id}`, payload);
    }
  
}

export default new MediaService;
