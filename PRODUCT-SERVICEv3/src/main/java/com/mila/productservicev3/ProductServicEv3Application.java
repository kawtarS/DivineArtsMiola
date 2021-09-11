package com.mila.productservicev3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ProductServicEv3Application {

    public static void main(String[] args) {
        SpringApplication.run(ProductServicEv3Application.class, args);
    }

}
