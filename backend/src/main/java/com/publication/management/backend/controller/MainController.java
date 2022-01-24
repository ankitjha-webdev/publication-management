package com.publication.management.backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/")
public class MainController {

    @GetMapping("/welcome")
    @ResponseBody
    public String getMessage() {

        return "Welcome to Spring Boot Backend Application";
    }   

}
