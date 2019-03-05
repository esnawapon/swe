package com.bookacourse.complaint.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public abstract class AbstractController {
    protected ResponseEntity success(Object object) {
        return new ResponseEntity<>(object == null ? "null" : object, HttpStatus.OK);
    }
}
