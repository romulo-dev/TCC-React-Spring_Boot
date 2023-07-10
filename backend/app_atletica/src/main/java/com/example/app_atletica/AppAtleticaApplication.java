package com.example.app_atletica;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Import;

//@SpringBootApplication(scanBasePackages = "com.md5.rest.webservices.*")
@SpringBootApplication
//@EnableAutoConfiguration
//@ComponentScan
//@ConfigurationPropertiesScan
//@EntityScan
//@SpringBootConfiguration(proxyBeanMethods = false)
//@EnableAutoConfiguration
//@Import({ SomeConfiguration.class, AnotherConfiguration.class })
public class AppAtleticaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppAtleticaApplication.class, args);
	}

}
