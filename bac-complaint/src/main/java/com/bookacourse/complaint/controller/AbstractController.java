package com.bookacourse.complaint.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.HashMap;
import java.util.Map;

public abstract class AbstractController {
    protected ResponseEntity success(Object object) {
        return new ResponseEntity<>(object == null ? "null" : object, HttpStatus.OK);
    }
    protected ResponseEntity badRequest() {
        Map error = new HashMap();
        error.put("error", "Bad Request");
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
