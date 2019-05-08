package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.bean.StaffMapping;
import com.bookacourse.complaint.service.StaffMappingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/staff-mapping")
public class StaffMappingController extends AbstractController {
    @Autowired
    private StaffMappingService service;
    @GetMapping(path="")
    public ResponseEntity search() {
        Object results = service.search();
        return success(results);
    }
    @GetMapping(path="/{id}")
    public ResponseEntity get(@PathVariable("id") String id) {
        Object result = service.getOneByStaffId(id);
        return success(result);
    }
    @PostMapping(path="")
    public ResponseEntity create(@Valid @RequestBody StaffMapping request) {
        Object result = service.create(request);
        return success(result);
    }

    @PutMapping(path="")
    public ResponseEntity update(@Valid @RequestBody StaffMapping request) {
        Object result = service.update(request);
        return success(result);
    }

    @DeleteMapping(path="{id}")
    public ResponseEntity delete(@PathVariable("id") String id) {
        Object result = service.deleteById(id);
        return success(result);
    }
}
