import http from '../../http-common';

class PaymentService {
  
    createNewPayment(payload) {
        return http.post("/payments", payload);
    }
    deletePayment(paymentId) {
        return http.delete(`/payments/${paymentId}`);
    }
    editUserPayment(paymentId,status) {
        return http.patch(`/payments/${paymentId}/${status}`);
    }
  
}

export default new PaymentService;
