package com.bookacourse.complaint.controller.view;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
public class GenericViewController {
//    @GetMapping("/")
//    public void rootView(HttpServletResponse response) throws IOException {
//        response.sendRedirect("main");
//    }
//    @GetMapping(value = "/{spring:^(?!assets|api).+}/**")
//    public ModelAndView index() {
//        return new ModelAndView("main");
//    }
	@GetMapping(value = "/main")
	public ModelAndView index() {
		return new ModelAndView("main");
	}
}

