package com.qingshixun.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.qingshixun.dao.StudentModelMapper;
import com.qingshixun.model.StudentModel;
import com.qingshixun.service.StudentModelService;

@Controller
public class DefaultController {
	@Autowired
	private StudentModelService studentModelService;

	// 首页
	@GetMapping(value = "/home")
	public String index() {
		return "index";
	}

	// 添加学生页面
	@GetMapping(value = "/add")
	public String add() {
		return "add";
	}

	// 添加一个学生
	@PostMapping(value = "/addOne")
	public String addOne(StudentModel student) {
		System.out.println(student.toString());
		studentModelService.addOne(student);
		return index();
	}
}
