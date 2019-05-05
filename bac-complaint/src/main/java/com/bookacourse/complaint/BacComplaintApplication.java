package com.bookacourse.complaint;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;

@SpringBootApplication
public class BacComplaintApplication {

	public static void main(String[] args) {
		SpringApplication.run(BacComplaintApplication.class, args);
	}
	
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(BacComplaintApplication.class);
	}
}
