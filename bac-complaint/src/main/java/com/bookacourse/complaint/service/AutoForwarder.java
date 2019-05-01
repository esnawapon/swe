package com.bookacourse.complaint.service;

import com.bookacourse.complaint.model.Complaint;
import com.bookacourse.complaint.model.Staff;
import com.bookacourse.complaint.repository.StaffRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AutoForwarder {
    @Autowired
    private StaffRepository staffRepository;
    public Staff forwardTo(Complaint complaint) {
//        if (Math.random() > 0.5) {
            return staffRepository.getOne("10001");
//        }
//        return null;
    }
}
