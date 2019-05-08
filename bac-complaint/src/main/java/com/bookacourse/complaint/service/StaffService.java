package com.bookacourse.complaint.service;

import com.bookacourse.complaint.model.Staff;
import com.bookacourse.complaint.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StaffService {
    @Autowired
    private StaffRepository repository;
    public Staff getOneById(String id) {
        return this.repository.getOneById(id);
    }

    public List<Staff> search() {
        return this.repository.findAll();
    }
}
