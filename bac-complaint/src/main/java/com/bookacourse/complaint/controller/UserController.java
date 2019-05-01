package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/user")
public class UserController extends AbstractController {
    @Autowired
    private UserService service;

    @GetMapping(path="/current")
    public ResponseEntity getCurrent() {
        return success(service.getCurrentUser());
    }
}
