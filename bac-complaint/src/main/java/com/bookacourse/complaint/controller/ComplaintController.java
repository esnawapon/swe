package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.bean.ComplaintCommentCreateRequest;
import com.bookacourse.complaint.bean.ComplaintCreateRequest;
import com.bookacourse.complaint.bean.ComplaintSearchRequest;
import com.bookacourse.complaint.service.ComplaintLogService;
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

    @Autowired
    private ComplaintLogService logService;

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

    @PutMapping(path="/{id}/close")
    public ResponseEntity close(@PathVariable("id") String id) {
        Object result = service.close(id);
        if (result == null) {
            return badRequest();
        }
        return success(result);
    }

    @PutMapping(path="/{id}/acknowledge")
    public ResponseEntity acknowledge(@PathVariable("id") String id) {
        Object result = service.acknowledge(id);
        if (result == null) {
            return badRequest();
        }
        return success(result);
    }

    @PutMapping(path="/{id}/working")
    public ResponseEntity working(@PathVariable("id") String id) {
        Object result = service.working(id);
        if (result == null) {
            return badRequest();
        }
        return success(result);
    }

    @PutMapping(path="/{id}/complete")
    public ResponseEntity complete(@PathVariable("id") String id) {
        Object result = service.complete(id);
        if (result == null) {
            return badRequest();
        }
        return success(result);
    }

    @PutMapping(path="/{id}/back-to-admin")
    public ResponseEntity backToAdmin(@PathVariable("id") String id) {
        Object result = service.backToAdmin(id);
        if (result == null) {
            return badRequest();
        }
        return success(result);
    }

    @PutMapping(path="/{id}/assign-to/{staffId}")
    public ResponseEntity assignTo(@PathVariable("id") String id, @PathVariable("staffId") String staffId) {
        Object result = service.assignTo(id, staffId);
        if (result == null) {
            return badRequest();
        }
        return success(result);
    }

    @GetMapping(path="/{id}/logs")
    public ResponseEntity getLogs(@PathVariable("id") String id) {
        Object result = logService.findAllByComplaintId(id);
        return success(result);
    }

    @GetMapping(path="/{id}/comments")
    public ResponseEntity getComments(@PathVariable("id") String id) {
        Object result = logService.findAllCommentsByComplaintId(id);
        return success(result);
    }

    @PostMapping(path="/{id}/comment")
    public ResponseEntity create(@PathVariable("id") String id, @Valid @RequestBody ComplaintCommentCreateRequest request) {
        Object result = logService.createComment(id, request);
        return success(result);
    }
}
