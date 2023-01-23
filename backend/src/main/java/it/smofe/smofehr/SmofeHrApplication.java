package it.smofe.smofehr;

import it.smofe.smofehr.dao.Checkinout;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@SpringBootApplication
public class SmofeHrApplication {

    public static void main(String[] args) {
        SpringApplication.run(SmofeHrApplication.class, args);
    }

}


