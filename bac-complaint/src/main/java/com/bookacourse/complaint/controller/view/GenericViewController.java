package com.bookacourse.complaint.controller.view;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;


@RestController
public class GenericViewController {
	@GetMapping(value = "/main")
	public ModelAndView index() {
		return new ModelAndView("main");
	}
}

