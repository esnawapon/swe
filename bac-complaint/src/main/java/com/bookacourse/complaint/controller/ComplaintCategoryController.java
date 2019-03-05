package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.service.ComplaintCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/complaint-category")
public class ComplaintCategoryController extends AbstractController {
    @Autowired
    private ComplaintCategoryService service;
    @GetMapping(path="")
    public ResponseEntity search() {
        Object results = service.search();
        return success(results);
    }

}
