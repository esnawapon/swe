package com.bookacourse.complaint.service;

import com.bookacourse.complaint.model.ComplaintCategory;
import com.bookacourse.complaint.repository.ComplaintCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ComplaintCategoryService {
    @Autowired
    private ComplaintCategoryRepository repository;
    public List<ComplaintCategory> search() {
        return repository.findAll();
    }
}

