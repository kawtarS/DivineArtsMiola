package com.mila.api.paymentservice2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class PaymentService2Application {

    public static void main(String[] args) {
        SpringApplication.run(PaymentService2Application.class, args);
    }

}
