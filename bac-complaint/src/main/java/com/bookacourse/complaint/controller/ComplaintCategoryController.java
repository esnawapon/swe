package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.bean.ComplaintCategoryCreateUpdateRequest;
import com.bookacourse.complaint.service.ComplaintCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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

    @GetMapping(path="/{id}")
    public ResponseEntity get(@PathVariable("id") String id) {
        Object result = service.getOneById(id);
        return success(result);
    }

    @PostMapping(path="")
    public ResponseEntity create(@Valid @RequestBody ComplaintCategoryCreateUpdateRequest request) {
        Object result = service.create(request);
        return success(result);
    }

    @PutMapping(path="")
    public ResponseEntity update(@Valid @RequestBody ComplaintCategoryCreateUpdateRequest request) {
        Object result = service.update(request);
        return success(result);
    }

    @DeleteMapping(path="{id}")
    public ResponseEntity delete(@PathVariable("id") String id) {
        Object result = service.deleteById(id);
        return success(result);
    }

}
