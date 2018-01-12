package com.qingshixun.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.qingshixun.model.StudentModel;

public interface StudentModelService {
	// 通过性别查询学生信息
	List<StudentModel> findListByGender(String gender);

	// 通过方向查询学生信息
	List<StudentModel> findListByDirection(String direction);

	// 查询所有学生信息
	List<StudentModel> findAll();

	// 添加一个学生
	void addOne(StudentModel student);

}
