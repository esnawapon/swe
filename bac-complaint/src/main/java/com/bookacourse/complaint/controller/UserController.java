package com.bookacourse.complaint.controller;

import com.bookacourse.complaint.AppConstant;
import com.bookacourse.complaint.bean.CurrentUser;
import com.bookacourse.complaint.bean.LoginRequest;
import com.bookacourse.complaint.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("api/user")
public class UserController extends AbstractController {
    @Autowired
    private UserService service;

    @GetMapping(path="/current")
    public ResponseEntity getCurrent(HttpServletRequest request) {
        Object user = request.getSession().getAttribute("user");
        return success(user);
    }

    @PostMapping("/login")
    public ResponseEntity login(HttpServletRequest httpRequest, @Valid @RequestBody LoginRequest request) {
        Object user = service.login(request);
        if (user != null) {
            httpRequest.getSession().setAttribute("user", user);
            return success(user);
        }
        return badRequest();
    }
}
