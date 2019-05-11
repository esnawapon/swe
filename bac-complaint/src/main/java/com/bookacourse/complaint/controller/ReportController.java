package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.bean.ReportRequest;
import com.bookacourse.complaint.service.ReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequestMapping("api/report")
public class ReportController extends AbstractController {
    @Autowired
    private ReportService service;
    @GetMapping(path="/auto-forwarder-success-rate")
    public ResponseEntity autoForwarderSuccessRate(@Valid ReportRequest request) {
        Object results = service.autoForwarderSuccessRate(request);
        return success(results);
    }

    @GetMapping(path="/complaint-number")
    public ResponseEntity complaintNumber(@Valid ReportRequest request) {
        Object results = service.complaintNumber(request);
        return success(results);
    }
}
