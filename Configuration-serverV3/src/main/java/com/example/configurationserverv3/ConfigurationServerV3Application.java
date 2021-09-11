package com.example.configurationserverv3;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.config.server.EnableConfigServer;

@SpringBootApplication
@EnableConfigServer
public class ConfigurationServerV3Application {

    public static void main(String[] args) {
        SpringApplication.run(ConfigurationServerV3Application.class, args);
    }

}
