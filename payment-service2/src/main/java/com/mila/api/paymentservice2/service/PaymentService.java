package com.mila.api.paymentservice2.service;

import com.mila.api.paymentservice2.entity.Payment;
import com.mila.api.paymentservice2.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Random;
import java.util.UUID;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository repository;
    public Payment doPayment(Payment payment){
        payment.setPaymentStatus(paymentProcessing());
        payment.setTransactionId(UUID.randomUUID().toString());
        return repository.save(payment);
    }
    public String paymentProcessing(){
        //api should be a 3rd paety payment gateway(paypal)
        return new Random().nextBoolean()?"succes":"false";
    }
}
