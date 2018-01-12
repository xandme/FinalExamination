package com.qingshixun.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.qingshixun.dao.StudentModelMapper;
import com.qingshixun.model.StudentModel;

@Service
@Transactional
public class StudentModelServiceImpl implements StudentModelService {
	@Autowired
	private StudentModelMapper studentModelMapper;

	@Override
	public List<StudentModel> findListByGender(String gender) {
		return studentModelMapper.findListByGender(gender);
	}

	@Override
	public List<StudentModel> findListByDirection(String direction) {
		return studentModelMapper.findListByDirection(direction);
	}

	@Override
	public List<StudentModel> findAll() {
		return studentModelMapper.findAll();
	}

	@Override
	public void addOne(StudentModel student) {
		studentModelMapper.addOne(student);
	}

}
