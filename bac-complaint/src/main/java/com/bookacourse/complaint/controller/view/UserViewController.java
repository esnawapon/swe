package com.bookacourse.complaint.controller.view;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;

@RestController
public class UserViewController {
    @GetMapping("/user/login")
    public @ResponseBody ModelAndView login(Map<String, Object> model, HttpServletRequest request) {
        String redirectUrl = request.getParameter("target");
        model.put("target", redirectUrl != null ? redirectUrl : "/");
        return new ModelAndView("login");
    }

    @GetMapping(path = "/user/logout")
    public @ResponseBody ModelAndView logout(HttpServletRequest request) {
        request.getSession().invalidate();
        return new ModelAndView("login");
    }
}
