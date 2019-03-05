package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.bean.ComplaintCreateRequest;
import com.bookacourse.complaint.bean.ComplaintSearchRequest;
import com.bookacourse.complaint.service.ComplaintService;
import com.bookacourse.complaint.util.StringUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("api/complaint")
public class ComplaintController extends AbstractController {
    Logger logger = LoggerFactory.getLogger(this.getClass());
    @Autowired
    private ComplaintService service;

    @GetMapping(path="")
    public ResponseEntity search(@Valid ComplaintSearchRequest request) {
        Object results = service.search(request);
        return success(results);
    }

    @GetMapping(path="/{id}")
    public ResponseEntity get(@PathVariable("id") String id) {
        Object result = service.getOneById(id);
        return success(result);
    }

    @PostMapping(path="")
    public ResponseEntity create(@Valid @RequestBody ComplaintCreateRequest request) {
        Object result = service.create(request);
        return success(result);
    }
}
