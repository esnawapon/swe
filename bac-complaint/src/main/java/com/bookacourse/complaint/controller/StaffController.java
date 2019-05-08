package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.service.StaffService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/staff")
public class StaffController extends AbstractController {
    @Autowired
    private StaffService service;
    @GetMapping(path="")
    public ResponseEntity search() {
        Object results = service.search();
        return success(results);
    }
}
