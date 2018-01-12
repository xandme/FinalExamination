package com.qingshixun.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.qingshixun.dao.StudentModelMapper;
import com.qingshixun.model.StudentModel;
import com.qingshixun.service.StudentModelService;

@RestController
public class StudentController {
	@Autowired
	private StudentModelService studentModelService;

	// 通过性别查询学生信息
	@PostMapping(value = "/Gen")
	public List<StudentModel> findByGender(@RequestParam String gender) {
		System.out.println(gender);
		return studentModelService.findListByGender(gender);
	}

	// 通过方向查询学生信息
	@PostMapping(value = "/Dir")
	public List<StudentModel> findByDirection(@RequestParam String direction) {
		System.out.println(direction);
		return studentModelService.findListByDirection(direction);
	}

	// 查询所有学生信息
	@GetMapping(value = "/list")
	public List<StudentModel> listStudent() {
		return studentModelService.findAll();
	}
}
